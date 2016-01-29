angular.module('climeride.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
		alert('MainCtrl');
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
		alert('ViewCtrl');
    }]);
