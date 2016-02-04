angular.module('climeride.controllers', [])
    .controller('welcomeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
//        alert('welcomeCtrl');
        //        $scope.greeting = "dsds";
        //
        //        $scope.test = function() {
        //            
        //            
        //            alert(device.platform);
        //            
        //        };
        //
        //        $scope.test();
        //        
        $scope.goToPage = function (routeName) {
            $location.path(routeName);
        };
    }])
    .controller('setupCtrl', ['$scope', '$http', '$location', '$route', function ($scope, $http, $location, $route) {
        alert('setupCtrl');
        
                $scope.uberIsInstalled = false;
                $scope.lyftIsInstalled = false;
        
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
                        schemeUber = $scope.iOSUber;
                        schemeLyft = $scope.iOSLyft;;
                    }
                    else if (device.platform === 'Android') {
                        schemeUber = $scope.androidUber;
                        schemeLyft = $scope.androidLyft;
                    }
        
                    appAvailability.check(
                        schemeUber,       // URI Scheme or Package Name
                        function () {  // Success callback
                            $scope.uberIsInstalled = true;
                            alert("Uber installed");
                            $scope.$digest();
                        },
                        function () {  // Error callback
                            $scope.uberIsInstalled = false;
                            alert("Uber not installed");
                            $scope.$digest();
                        }
                    );
                    
                    appAvailability.check(
                        schemeLyft,       // URI Scheme or Package Name
                        function () {  // Success callback
                            $scope.lyftIsInstalled = true;
                            alert("Lyft installed");
                            $scope.$digest();
                        },
                        function () {  // Error callback
                            $scope.lyftIsInstalled = false;
                            alert("Lyft not installed");
                            $scope.$digest();
                        }
                    );
                };
                
                $scope.init();
        
                $scope.installApp = function (appName) {
                    
                };
        
        $scope.goToPage = function () {
            $location.path($scope.pageName);
        };

        $scope.getAppStatusClass = function(isInstalled) {
            if (isInstalled) {
                return 'app-status-installed';
            } else {
                return 'app-status-notinstalled';
            }
        };
        //
        //        $scope.updateStatus = function () {
        //            $scope.uberAvailable = !$scope.uberAvailable;
        //            $scope.lyftAvailable = !$scope.lyftAvailable;
        //        };
    }]);
