angular.module('climeride', ['ngRoute', 'climeride.services', 'climeride.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'setupCtrl',
            templateUrl: 'app/partials/setup.html'
        })
        .when('/welcome', {
            controller: 'welcomeCtrl',
            templateUrl: 'app/partials/welcome.html'
        })
        .otherwise({redirectTo: '/'});
    });
