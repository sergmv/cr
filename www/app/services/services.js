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

        

        appConfig.reminderBoxShow = true;

        commonService.goBack = function () {

        }


        commonService.carriers = [
        {
            Id: 1,
            Title: "LINKS INSURANCE SERVICE",
            GooglePlay: "me.snapsheet.gmachfghfghgf65",
            AppStore: "5748467254dfghfdhfghfg1"
        },
        {
            Id: 2,
            Title: "LINKS INSURANCE SERVICE 2",
            GooglePlay: "me.snapsheet.gmachfghfghgf6yrt5",
            AppStore: "5748467254dfghfdhfgyrtyhfg1"
        },
         {
             Id: 3,
             Title: "National General Insurance",
             GooglePlay: "me.snapsheet.gmac",
             AppStore: "574846721"
         }

        ];

        commonService.init = function () {
            if (typeof appConfig.selectedCarrier == "undefined") {
                localStorage.clear();
            }

            appConfig.agreementAccepted = typeof localStorage.agreementAccepted == "undefined" ? false : localStorage.agreementAccepted;

            appConfig.selectedCarrier = commonService.carriers[0];
        }

        


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

        commonService.getSelectedCarrier = function () {
            return appConfig.selectedCarrier;
        };

        commonService.setSelectedCarrier = function (value) {
            appConfig.selectedCarrier = value;
        };

        commonService.setReminderBoxShowStatus = function (value) {
            appConfig.reminderBoxShow = value;
        };

        commonService.getReminderBoxShowStatus = function () {
            return appConfig.reminderBoxShow;
        };

        commonService.setAgreementAccepted = function () {
            localStorage.agreementAccepted = true;
            appConfig.agreementAccepted = true;
        };

        commonService.resetAgreementAccepted = function () {
            localStorage.agreementAccepted = false;
            appConfig.agreementAccepted = false;
        };

        commonService.getAgreementAccepted = function () {
            return appConfig.agreementAccepted;
        };

        commonService.resetUserInfo = function () {
            appConfig.claimNumber = "";
            appConfig.holderName = "";
            appConfig.zipCode = "";
        };


        commonService.appConfig = appConfig;

        commonService.init();

        return commonService;
    }]);
