angular.module('climeride', ['ngRoute', 'climeride.services', 'climeride.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/setup.html'
        })
        .when('/welcome', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/welcome.html'
        })
        .otherwise({redirectTo: '/'});
    });
