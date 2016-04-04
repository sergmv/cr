angular.module('climeride.controllers', [])
    .controller('cardCtrl', ['$scope', '$http', '$location', 'commonService', function ($scope, $http, $location, commonService) {
        $scope.init = function () {
            $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });
        };

        $scope.agreementAccepted = commonService.getAgreementAccepted();

        $scope.setAgree = function () {
            commonService.setAgreementAccepted();
            $scope.agreementAccepted = true;
        }

        $scope.init();

        $scope.goToPage = function (pageName) {
            $location.path(pageName);
        };
    }])
    .controller('requestrideCtrl', ['$scope', '$http', '$location', 'commonService', function ($scope, $http, $location, commonService) {

        $scope.reminderBoxShow = commonService.getReminderBoxShowStatus();


        $scope.init = function () {
            $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });
        };


        window.setTimeout($scope.init,50);

        $scope.goToPage = function (pageName) {
            $location.path(pageName);
        };

        var successCallback = function () {
        };
        var errorCallback = function () {
            //            alert('Errors');
        };

        $scope.reminderBoxHide = function () {
            $scope.reminderBoxShow = false;
            commonService.setReminderBoxShowStatus(false);
            window.setTimeout($scope.init, 50);
        }

//        var onConfirm = function (buttonIndex) {
//            if (buttonIndex == 1) {
//                var selectedAppId = {};
//
//                if ($scope.selectedAppName == 'Lyft') {
//                    selectedAppId = commonService.getLyftId();
//                } else {
//                    selectedAppId = commonService.getUberId();
//                }
//                window.plugins.launcher.launch({ uri: selectedAppId }, successCallback, errorCallback);
//            }
//        };

        $scope.selectedAppName = {};

        $scope.selectApp = function (appName) {
            var selectedAppId = {};

            $scope.selectedAppName = appName;

            if ($scope.selectedAppName == 'Lyft') {
                selectedAppId = commonService.getLyftId();
            } else {
                selectedAppId = commonService.getUberId();
            }
            window.plugins.launcher.launch({ uri: selectedAppId }, successCallback, errorCallback);


//            $scope.selectedAppName = appName;
//
//            navigator.notification.confirm(
//                'You have selected ' + $scope.selectedAppName, // message
//                 onConfirm,            // callback to invoke with index of button pressed
//                'Run application',           // title
//                ['Run', 'Cancel']     // buttonLabels
//            );

        };



    }])
    .controller('welcomeCtrl', ['$scope', '$http', '$location', 'commonService', function ($scope, $http, $location, commonService) {
        //        alert('welcomeCtrl');
        //        $scope.greeting = "dsds";
        //

        $scope.agreementAccepted = commonService.getAgreementAccepted();

        $scope.appConfig = commonService.appConfig;

        $scope.init = function () {


            $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });

        };

        $scope.init();
        //        
        $scope.goToPage = function (pageName) {
            $location.path(pageName);
        };
    }])
    .controller('setupCtrl', ['$scope', '$http', '$location', '$route', 'commonService', function ($scope, $http, $location, $route, commonService) {

        $scope.carriers = commonService.carriers;

        $scope.storeLinks = commonService.storeLinks;

        $scope.datar = {};

        $scope.uberIsInstalled = true;
        $scope.lyftIsInstalled = true;

        $scope.claimNumberValid = true;


        $scope.iOSUber = 'uber:';
        $scope.iOSLyft = 'lyft:';

        $scope.androidUber = 'com.ubercab';
        $scope.androidLyft = 'me.lyft.android';

        $scope.appStoreUberId = '368677368';
        $scope.appStoreLyftId = '574846721';


        $scope.messages = {};

        $scope.messages.installApp = "Install ride share application";
        $scope.messages.provideBy = "Ride share provided by";
        
        $scope.claimNumberValid = true;

        $scope.claimNumber = "";
        $scope.zipCode = "";

        $scope.zipValid = true;
        
        var numberRegExp = /^-?[0-9]+$/;
        
        $scope.validateClaimNumberFields = function () {
//            var claimNumber = $scope.claimNumber.replace(/\D/g, '');
            var claimNumber = $scope.claimNumber.replace('-', '').replace('-', '');
            
            if (claimNumber.length == 15 && numberRegExp.test(claimNumber)) {
                $scope.claimNumberValid = true;
            } else {
                $scope.claimNumberValid = false;
            }
        };
        
        $scope.validateZip = function () {
            var zipCode = $scope.zipCode.replace('-', '').replace('-', '');
            
            if (zipCode.length == 5 && numberRegExp.test(zipCode)) {
                $scope.zipValid = true;
            } else {
                $scope.zipValid = false;
            }
        };


        $scope.init = function () {
            $scope.datar.selectedCarrier = commonService.getSelectedCarrier();

            //$scope.claimNumber = "456456456456456";
            //$scope.policeHolder = "Test Holder ";
            //$scope.zipCode = "57565";

            $('#imgCtr').css({ 'line-height': $(window).height() - $('#content-ctr').height() - 20 + 'px' });

            $scope.logoCtrH = $(window).height() - $('#content-ctr').height() - 30;
            $scope.MH = $('#content-ctr').height();

            $scope.physicalScreenWidth = window.screen.width * window.devicePixelRatio;
            $scope.physicalScreenHeight = window.screen.height * window.devicePixelRatio;

            $scope.height = window.screen.height;
            $scope.width = window.screen.width;
            $scope.devicePixelRatio = window.devicePixelRatio;
            
            $scope.claimNumber = commonService.getClaimNumber();
            $scope.policeHolder = commonService.getHolderName();
            $scope.zipCode = commonService.getZipCode();
            
            if (typeof device == "undefined") {
                return;
            }

            


            var schemeUber;
            var schemeLyft;

            // Don't forget to add the cordova-plugin-device plugin for `device.platform`
            if (device.platform === 'iOS') {
                schemeUber = $scope.iOSUber;
                schemeLyft = $scope.iOSLyft;;

                $scope.storeUberId = $scope.appStoreUberId;
                $scope.storeLyftId = $scope.appStoreLyftId;
            }
            else if (device.platform === 'Android') {
                schemeUber = $scope.androidUber;
                schemeLyft = $scope.androidLyft;

                $scope.storeUberId = $scope.androidUber;
                $scope.storeLyftId = $scope.androidLyft;
            }

            commonService.setUberId(schemeUber);
            commonService.setLyftId(schemeLyft);

            appAvailability.check(
                schemeUber,       // URI Scheme or Package Name
                function () {  // Success callback
                    $scope.uberIsInstalled = true;
                    //                                                alert("Uber installed");
                    $scope.$digest();
                },
                function () {  // Error callback
                    $scope.uberIsInstalled = false;
                    //                                                alert("Uber not installed");
                    $scope.$digest();
                }
            );

            appAvailability.check(
                schemeLyft,       // URI Scheme or Package Name
                function () {  // Success callback
                    $scope.lyftIsInstalled = true;
                    //                                                alert("Lyft installed");
                    $scope.$digest();
                },
                function () {  // Error callback
                    $scope.lyftIsInstalled = false;
                    //                                                alert("Lyft not installed");
                    $scope.$digest();
                }
            );
        };

        $scope.init();

        $scope.onResume = function () {
            $scope.init();
        };

        $scope.addEv = function () {
            document.addEventListener("resume", $scope.onResume, false);
        };

        $scope.addEv();

        $scope.installApp = function (appName) {
            //            alert('Install app run ' + appName + device.platform);
            var appStoreId = {};

            if (appName == "uber") {
                appStoreId = $scope.storeUberId;
            } else {
                if (appName == "lyft") {
                    appStoreId = $scope.storeLyftId;
                }
            }

            if (device.platform == "iOS") {
                window.open("itms-apps://itunes.apple.com/app/id" + appStoreId);
            } else {
                if (device.platform == "Android") {
                    window.open('https://play.google.com/store/apps/details?id=' + appStoreId, '_system');
                }
            }
        };

        $scope.openCarrier = function(carrier) {
            if (device.platform == "iOS") {
                window.open("itms-apps://itunes.apple.com/app/id" + carrier.AppStore);
            } else {
                if (device.platform == "Android") {
                    window.open('https://play.google.com/store/apps/details?id=' + GooglePlay, '_system');
                }
            }
        };

        $scope.carrierChange = function (value) {
            commonService.setSelectedCarrier(value);
            commonService.resetAgreementAccepted();
        };

        $scope.goToPage = function (pageName) {
            commonService.setClaimNumber($scope.claimNumber);
            commonService.setHolderName($scope.policeHolder);
            commonService.setZipCode($scope.zipCode);

            $location.path(pageName);
        };

        $scope.alreadyRemove = false;

        //        $scope.removeDefaultOption = function() {
        //            
        //            
        //            if (!$scope.alreadyRemove) {
        //                var x = document.getElementById("isS");
        //                x.remove(x.selectedIndex);
        //                $scope.alreadyRemove = true;
        //            }
        //        };

        $scope.getAppStatusClass = function (isInstalled) {
            if (isInstalled) {
                return 'app-status-installed';
            } else {
                return 'app-status-notinstalled';
            }
        };

        $scope.disableStyle = function (value) {
            if (value) {
                return 'disable-style';
            } else {
                return;
            }
        };

        //
        //        $scope.updateStatus = function () {
        //            $scope.uberAvailable = !$scope.uberAvailable;
        //            $scope.lyftAvailable = !$scope.lyftAvailable;
        //        };
    }]);
