var climerideApp = angular.module('climeride', ['climeride.controllers', 'ngRoute']);

climerideApp.config(function ($routeProvider, $locationProvider) {

    //Hide # from url
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
    // Change the default overlay message

    //blockUIConfigProvider.template("<div ng-class=\"{'block-ui-overlay' : blocking}\">jgh j gh jgh j</div>");
    $routeProvider
        
        .when('/',
            {
                controller: 'MainCtrl',
                templateUrl: 'app/partials/home.html'
                //,
                //resolve: {
                //    couponsresolve: function (repoService) {
                //        return repoService.coupons().then(function (response) {
                //            return response.data;
                //        });
                //    }
                //}
            })
    .when('/pay',
        {
            controller: 'MainCtrl',
            templateUrl: 'app/partials/home.html'

            //offerResponse: function (CouponResolver) { // Inject resources named 'Gists' and 'Meta'
            //    return CouponResolver.resolve;
            //}

        })
    .otherwise({ redirectTo: '/' });
});