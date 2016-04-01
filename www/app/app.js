angular.module('climeride', ['ngRoute', 'ngMask', 'climeride.services', 'climeride.controllers'])
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
            .when('/requestride', {
                controller: 'requestrideCtrl',
                templateUrl: 'app/partials/requestride.html'
            })
            .when('/requestride', {
                controller: 'requestrideCtrl',
                templateUrl: 'app/partials/requestride.html'
            })
            .when('/card', {
                controller: 'cardCtrl',
                templateUrl: 'app/partials/card.html'
            })
            .when('/agreements', {
                controller: 'cardCtrl',
                templateUrl: 'app/partials/agreements.html'
            })
        .otherwise({ redirectTo: '/' });
    });
