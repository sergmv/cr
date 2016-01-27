angular.module('climeride.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', 'mainService', function ($scope, $http, $location, $rootScope, mainService) {

        $scope.ClimeRideReady = "";
        $scope.init = function () {
            $scope.ClimeRideReady = "ClimeRideReady is true";
        };

        $scope.init();
    }]);