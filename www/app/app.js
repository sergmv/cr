var climerideApp = angular.module('climeride', ['climeride.controllers', 'climeride.services', 'ngRoute']);

climerideApp.config(function ($routeProvider, $locationProvider) {

    //Hide # from url
    //$locationProvider.html5Mode(false);
    //$locationProvider.hashPrefix('!');
    // Change the default overlay message

    //blockUIConfigProvider.template("<div ng-class=\"{'block-ui-overlay' : blocking}\">jgh j gh jgh j</div>");
    $routeProvider
        
        .when('/',
            {
                controller: 'setupCtrl',
                templateUrl: 'app/partials/setupPage.html'
                //,
                //resolve: {
                //    couponsresolve: function (repoService) {
                //        return repoService.coupons().then(function (response) {
                //            return response.data;
                //        });
                //    }
                //}
            })
    .when('/welcome',
        {
            controller: 'welcomeCtrl',
            templateUrl: 'app/partials/welcomePage.html'

            //offerResponse: function (CouponResolver) { // Inject resources named 'Gists' and 'Meta'
            //    return CouponResolver.resolve;
            //}

        })
    .when('/benefit',
        {
            controller: 'welcomeCtrl',
            templateUrl: 'app/partials/benefitPage.html'

            //offerResponse: function (CouponResolver) { // Inject resources named 'Gists' and 'Meta'
            //    return CouponResolver.resolve;
            //}

        })
    .otherwise({ redirectTo: '/' });
});