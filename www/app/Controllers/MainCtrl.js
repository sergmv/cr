angular.module('climeride.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        
        $scope.greeting = "dsds";

        $scope.test = function() {
            
            
            alert(device.platform);
            
            var scheme;

            // Don't forget to add the cordova-plugin-device plugin for `device.platform`
            if (device.platform === 'iOS') {
                scheme = $scope.packageName;
            }
            else if (device.platform === 'Android') {
                scheme = $scope.packageName;
            }

            appAvailability.check(
                scheme,       // URI Scheme or Package Name
                function () {  // Success callback
                    alert(scheme + ' is available :)');
                },
                function () {  // Error callback
                    alert(scheme + ' is not available :(');
                }
            );
            
        };
        
        $scope.goToPage = function (routeName) {
            $location.path(routeName);
        };
    }])
    .controller('setupCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {


        $scope.uberAvailable = false;
        $scope.lyftAvailable = false;

        $scope.iOSUber = 'uber:';
        $scope.iOSLyft = 'lyft:';
        
        $scope.androidUber = 'com.ubercab';
        $scope.androidLyft = 'me.lyft.android';

        $scope.init = function () {


            alert(device.platform);

            var schemeUber;
            var schemeLyft;

            // Don't forget to add the cordova-plugin-device plugin for `device.platform`
            if (device.platform === 'iOS') {
                schemeUber = $scope.packageName;
            }
            else if (device.platform === 'Android') {
                schemeUber = $scope.androidUber;
                schemeLyft = $scope.androidLyft;
            }

            appAvailability.check(
                schemeUber,       // URI Scheme or Package Name
                function () {  // Success callback
                    $scope.uberAvailable = true;
                },
                function () {  // Error callback
                    $scope.uberAvailable = false;
                }
            );
            
            appAvailability.check(
                schemeLyft,       // URI Scheme or Package Name
                function () {  // Success callback
                    $scope.lyftAvailable = true;
                },
                function () {  // Error callback
                    $scope.lyftAvailable = false;
                }
            );

        };
        
//        $scope.init();

        $scope.installApp = function (appName) {
            
        };

        $scope.goToPage = function(routeName) {
            $location.path(routeName);
        };
    }]);