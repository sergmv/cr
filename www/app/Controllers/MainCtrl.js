angular.module('climeride.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        
        $scope.greeting = 'Welcome!';

        $scope.test = function() {
            alert("alert test");
            
            var scheme;

            // Don't forget to add the cordova-plugin-device plugin for `device.platform`
            if (device.platform === 'iOS') {
                scheme = 'twitter://';
            }
            else if (device.platform === 'Android') {
                scheme = 'com.twitter.android';
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
