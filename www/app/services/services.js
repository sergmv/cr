angular.module('climeride.services', [])
    .factory('cordovaReady', [function () {
        return function (fn) {
            var queue = [],
                impl = function () {
                    queue.push([].slice.call(arguments));
                };

            document.addEventListener('deviceready', function () {
                queue.forEach(function (args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function () {
                return impl.apply(this, arguments);
            };
        };
    }]).service('commonService', [function () {

        var appConfig = {};

        var commonService = {};

        commonService.setUberId = function (value) {
            appConfig.uberId = value;
        };
        
        commonService.setLyftId = function (value) {
            appConfig.lyftId = value;
        };

        commonService.getUberId = function () {
            return $scope.uberId;
        };
        
        commonService.getLyftId = function () {
            return $scope.lyftId;
        };

        return commonService;
    }]);
