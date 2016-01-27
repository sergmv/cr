angular.module('climeride.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        
        $scope.greeting = 'Welcome!';

        $scope.test = function() {
            alert("alert test");
        };
    }]);
