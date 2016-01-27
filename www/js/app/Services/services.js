angular.module('climeride.services', [])
    .factory('cordovaReady', [function() {
        return function(fn) {
            var queue = [],
                impl = function() {
                    queue.push([].slice.call(arguments));
                };

            document.addEventListener('deviceready', function() {
                queue.forEach(function(args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function() {
                return impl.apply(this, arguments);
            };
        };
    }])
    .service('invitationService', ['$http', '$q',
        function($http, $q) {
            // this.currentUser = $.jStorage.get('user');
            this.currentCourseId = 0;
            this.courses = [];
            this.groups = [];
            this.buddies = {};
            this.groupMembers = {};
            this.countInvited = 0;
            this.countRequiredResponses = 0;
            this.countTotalInvitation = 0;
            this.chatUserId = '';
            this.chatFirstName = '';
            this.chatLastName = '';
            this.foursomeMode = "golfer";
            this.foursomeinvitationId = 0;
            this.foursomeCourseId = 0;

            var self = this;
            $.blockUI();

            this.init = function() {
                $q.all([
                    $http.jsonp(socialputtsLink + "/api/Course/GetFavoriteCoursesForUser?userId=" + $.jStorage.get('user').userId + "&alt=json-in-script&callback=JSON_CALLBACK"),
                    $http.get(socialputtsLink + '/api/Group/GetGroupsCurrentUserWithMemberCountMob/?userId=' + $.jStorage.get('user').userId),
                    $http.get(socialputtsLink + "/api/Buddies/Get?userId=" + $.jStorage.get('user').userId)
                ]).then(function(responses) {

                    var cor = [];
                    _.each(responses[0].data, function(course) {
                        cor.push(course);
                    });
                    self.courses = cor;

                    _.each(responses[1].data, function(group) {
                        self.groups.push(group);
                    });

                    self.buddies = responses[2].data;
                    console.log(self.buddies);
                    $.unblockUI();
                });


            };

            this.init();


            this.getGroupMembers = function(groupId) {
                $.blockUI();
                $http.get(socialputtsLink + '/api/Group/GetGroupMembersMob/?id=' + groupId + '&userId=' + $.jStorage.get('user').userId).success(function(result) {
                    console.log(result);
                    self.groupMembers = result;
                    $.unblockUI();
                });
                $.unblockUI();
            };

            this.addBuddy = function(buddyEmail, callback) {

                var data = { userId: self.currentUser.userId, username: buddyEmail };
                console.log(data);
                $http.post(socialputtsLink + '/api/Buddies/AddToBuddiesMob', data).success(function(data) {

                    console.log(data.success);
                    var ret = false;
                    if (data.success == true) {
                        ret = true;
                    } else {
                        alert(data.message);
                        ret = false;
                    }
                    callback(ret);
                });

            };

            this.sendInvitation = function(invitation) {
                $.blockUI();
                console.log(invitation);
                $http.post(socialputtsLink + "/api/FoursomeInvitation/SendInvitations?userId=" + $.jStorage.get('user').userId, invitation)
                    .success(function(data) {
                        self.countInvited = parseInt(data);
                        console.log(self.countInvited);
                        $.unblockUI();

                    });
            };


        }])
    .service('courseFinderService', ['$http', function($http) {
        var object = {};
        object.favCourses = [];
        this.courseId = 0;
        this.courseName = '';
        this.map = {};
        var self = this;
        this.courses = {};
        this.myOptions = {};
        this.zoom = 0;

        this.search = function(callback) {


            if (document.getElementById("map") != null) {
                var mapCource = new google.maps.Map(document.getElementById("map"));
            }

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': self.getAddress() }, function(results, status) {
                // initializeMap();
                var zoom = 17;
                if (status == google.maps.GeocoderStatus.OK) {
                    switch (results[0].address_components[0].types[0]) {
                    case "route":
                        break;
                    case "administrative_area_level_2":
                        zoom = 6;
                        break;
                    case "administrative_area_level_1":
                        zoom = 7;
                        break;
                    case "locality":
                        zoom = 10;
                        break;
                    case "country":
                        zoom = 4;
                        break;
                    }
                    mapCource.setCenter(results[0].geometry.location);
                    var center = mapCource.getCenter();
                    if (center == undefined) {
                        center = new google.maps.LatLng("39.805733", "-98.555510"); // geografic center Usa - state Kansas
                        map.setCenter(center);
                    }

                    var packet = {
                        CourseModel: object.form,
                        LatLng: {
                            Latitude: center.lat(),
                            Longitude: center.lng()
                        }
                    };
                    console.log(packet);
                    var mileage = object.form.Mileage;
                    if (mileage != "0") {
                        switch (mileage) {
                        case "15":
                            zoom = 11;
                            break;
                        case "30":
                            zoom = 10;
                            break;
                        case "50":
                            zoom = 8;
                            break;
                        case "75":
                            zoom = 7;
                            break;
                        }
                    } else if ((object.form.City != "") || (object.form.Zip != "")) {
                        zoom = 10;
                        object.form.Mileage = "30";
                    }

                    self.zoom = zoom;

                    mapCource.setZoom(zoom);
                    console.log(packet);

                    self.searchCourses(packet, function(courses) {

                        var myOptions = {
                            zoom: mapCource.getZoom(),
                            center: mapCource.getCenter(),
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        self.myOptions = myOptions;
                        self.courses = courses;
                        console.log(self.myOptions);

                        callback();
                    });
                }

            });
        };


        this.getObject = function() {
            return object;
        };
        this.setObject = function(value) {
            object.form = value;
        };
        this.setCountry = function(country) {
            object.form.Country = country.trim();
        };
        this.getAddress = function() {
            return object.form.Zip + ' ' + object.form.City + '+' + object.form.Country + '+' + object.form.StateName;
        };
        this.setFavoriteCourses = function(favCourse) {
            object.favCourses.push(favCourse);
        };
        this.removeFavoriteCourse = function(id) {
            object.favCourses = _.without(object.favCourses, _.findWhere(object.favCourses, { id: id }));
        };
        this.clearFavoriteCoursesArray = function() {
            object.favCourses = [];
        };
        this.searchCourses = function(packet, calback) {

            $http.post(socialputtsLink + "/api/Course/GetSearchedCourses?email=" + $.jStorage.get('user').userName, packet)
                .error(function() {
                    alert('Something wrong happend!');
                })
                .success(function(courses) {
                    calback(courses);
                });
        };


    }]);