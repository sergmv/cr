angular.module('climeride.controllers', [])
    .controller('requestrideCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        //        alert('welcomeCtrl');
        //        $scope.greeting = "dsds";
        //
        $scope.init = function () {


            $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });

        };

        $scope.init();
                
        $scope.goToPage = function (pageName) {
            $location.path(pageName);
        };

        $scope.selectApp = function(appName) {
            alert("You have selected " + appName);
        };
    }])
    .controller('welcomeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        //        alert('welcomeCtrl');
        //        $scope.greeting = "dsds";
        //
                $scope.init = function() {
                    
                    
                    $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });
                    
                };
        
                $scope.init();
        //        
                $scope.goToPage = function (pageName) {
                    $location.path(pageName);
                };
    }])
    .controller('setupCtrl', ['$scope', '$http', '$location', '$route', function ($scope, $http, $location, $route) {
        //alert('setupCtrl');

//        $scope.uberIsInstalled = false;
//        $scope.lyftIsInstalled = true;


        $scope.iOSUber = 'uber:';
        $scope.iOSLyft = 'lyft:';

        $scope.androidUber = 'com.ubercab';
        $scope.androidLyft = 'me.lyft.android';
        
        $scope.appStoreUberId = '368677368';
        $scope.appStoreLyftId = '529379082';

        $scope.messages = {};

        $scope.messages.installApp = "Install ride share application";
        $scope.messages.provideBy = "Ride share provided by";

        $scope.init = function () {
            

            


            $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });


            

            $scope.logoCtrH = $(window).height() - $('#content-ctr').height() - 30;
            $scope.MH = $('#content-ctr').height();

            $scope.physicalScreenWidth = window.screen.width * window.devicePixelRatio;
            $scope.physicalScreenHeight = window.screen.height * window.devicePixelRatio;
            
            $scope.height = window.screen.height;
            $scope.width = window.screen.width;
            $scope.devicePixelRatio = window.devicePixelRatio;
            
            if (typeof device == "undefined") {
                return;
            }


            var schemeUber;
            var schemeLyft;

            // Don't forget to add the cordova-plugin-device plugin for `device.platform`
            if (device.platform === 'iOS') {
                schemeUber = $scope.iOSUber;
                schemeLyft = $scope.iOSLyft;;

                $scope.storeUberId = $scope.appStoreUberId;
                $scope.storeLyftId = $scope.appStoreLyftId;
            }
            else if (device.platform === 'Android') {
                schemeUber = $scope.androidUber;
                schemeLyft = $scope.androidLyft;
                
                $scope.storeUberId = $scope.androidUber;
                $scope.storeLyftId = $scope.androidLyft;

            }

            appAvailability.check(
                schemeUber,       // URI Scheme or Package Name
                function () {  // Success callback
                    $scope.uberIsInstalled = true;
//                                                alert("Uber installed");
                    $scope.$digest();
                },
                function () {  // Error callback
                    $scope.uberIsInstalled = false;
//                                                alert("Uber not installed");
                    $scope.$digest();
                }
            );

            appAvailability.check(
                schemeLyft,       // URI Scheme or Package Name
                function () {  // Success callback
                    $scope.lyftIsInstalled = true;
//                                                alert("Lyft installed");
                    $scope.$digest();
                },
                function () {  // Error callback
                    $scope.lyftIsInstalled = false;
//                                                alert("Lyft not installed");
                    $scope.$digest();
                }
            );
        };

        $scope.init();
        
        $scope.onResume = function () {
            $scope.init();
        };

        $scope.addEv = function () {
            document.addEventListener("resume", $scope.onResume, false);
        };

        $scope.addEv();

        $scope.installApp = function (appName) {
//            alert('Install app run ' + appName + device.platform);
            var appStoreId = {};

            if (appName == "uber") {
                appStoreId = $scope.storeUberId;
            } else {
                if (appName == "lyft") {
                    appStoreId = $scope.storeLyftId;
                }
            }
            
            if (device.platform == "iOS") {
                window.open("itms-apps://itunes.apple.com/app/id" + appStoreId);
            } else {
                if (device.platform == "Android") {
                    window.open('https://play.google.com/store/apps/details?id=' + appStoreId, '_system');
                }
            }
        };

        $scope.goToPage = function (pageName) {
            $location.path(pageName);
        };

        $scope.alreadyRemove = false;
        
//        $scope.removeDefaultOption = function() {
//            
//            
//            if (!$scope.alreadyRemove) {
//                var x = document.getElementById("isS");
//                x.remove(x.selectedIndex);
//                $scope.alreadyRemove = true;
//            }
//        };

        $scope.getAppStatusClass = function (isInstalled) {
            if (isInstalled) {
                return 'app-status-installed';
            } else {
                return 'app-status-notinstalled';
            }
        };
        
        $scope.disableStyle = function (value) {
            if (value) {
                return 'disable-style';
            } else {
                return;
            }
        };
        
        //
        //        $scope.updateStatus = function () {
        //            $scope.uberAvailable = !$scope.uberAvailable;
        //            $scope.lyftAvailable = !$scope.lyftAvailable;
        //        };
    }]);
