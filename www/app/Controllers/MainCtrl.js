﻿angular.module('climeride.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        
        $scope.greeting = $scope.packageName;

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
    }]);
