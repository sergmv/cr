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

        commonService.carriers = [
        {
            Id: 1,
            Title: "LINKS INSURANCE SERVICE",
            GooglePlay: "me.snapsheet.gmac",
            AppStore: "id574846721"
        },
        {
            Id: 2,
            Title: "LINKS INSURANCE SERVICE 2"
        },
            {
                Id: 3,
                Title: "National General Insurance"
            }
            
        ];

        commonService.storeLinks = [
            {
                Id: 3,
                
            }
        ];


        commonService.setUberId = function (value) {
            appConfig.uberId = value;
        };
        
        commonService.setLyftId = function (value) {
            appConfig.lyftId = value;
        };

        commonService.getUberId = function () {
            return appConfig.uberId;
        };
        
        commonService.getLyftId = function () {
            return appConfig.lyftId;
        };
        
        //---------------------------
        commonService.setClaimNumber = function (value) {
            appConfig.claimNumber = value;
        };
        
        commonService.setHolderName = function (value) {
            appConfig.holderName = value;
        };
        
        commonService.setZipCode = function (value) {
            appConfig.zipCode = value;
        };
        
        commonService.getClaimNumber = function () {
            return appConfig.claimNumber;
        };
        
        commonService.getHolderName = function () {
            return appConfig.holderName;
        };
        
        commonService.getZipCode = function () {
            return appConfig.zipCode;
        };

        commonService.isAgreement



        return commonService;
    }]);
