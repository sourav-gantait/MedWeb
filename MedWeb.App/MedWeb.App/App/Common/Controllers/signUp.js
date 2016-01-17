(function () {
    'use strict';
    var controllerId = 'signUp';
    angular.module('app').controller(controllerId, ['$scope', '$location', '$timeout', 'authService', signUp]);

    function signUp($scope, $location, $timeout, authService) {
        var vm = this;
        vm.title = 'Sign Up';
        vm.savedSuccessfully = false;
        vm.message = "";
        vm.toggleStep1 = true;
        vm.toggleStep2 = false;
        vm.toggleStep3 = false;
        vm.toggleStep4 = false;
        vm.toggleStep5 = false;

        vm.showStep1 = showStep1;
        vm.showStep2 = showStep2;
        vm.showStep3 = showStep3;
        vm.showStep4 = showStep4;
        vm.showStep5 = showStep5;

        vm.registration = {

            LoginId: "",
            Password: "",
            Role: "Admin",

            UId: "",
            Location: "",
            IssueDate: "",
            ExpiryDate: "",

            FirstName: "",
            MiddleName: "",
            LastName: "",
            AdharId: "",
            PanId: "",
            VoterId: "",
            DOB: "",
            Photo: "temp photo",

            Mobile1: "",
            Mobile2: "",
            Landline: "",
            PrimaryEmail: "",
            SecondaryEmail: "",
            Linkedin: "",
            Facebook: "",
            Twitter: "",

            Country: "",
            State: "",
            Zip: "",
            Area: "",
            AddressLine1: "",
            AddressLine2: "",
            AddressLine3: "",
            Landmark: ""
        };
        vm.size = 'small';
        vm.type = 'circle';
        vm.imageDataURI = '';
        vm.resImageDataURI = '';
        vm.resImgFormat = 'image/png';
        vm.resImgQuality = 1;
        vm.selMinSize = 100;
        vm.resImgSize = 200;
        //$scope.aspectRatio=1.2;
        vm.onChange = function ($dataURI) {
            console.log('onChange fired');
        };
        vm.onLoadBegin = function () {
            console.log('onLoadBegin fired');
        };
        vm.onLoadDone = function () {
            console.log('onLoadDone fired');
        };
        vm.onLoadError = function () {
            console.log('onLoadError fired');
        };
        vm.countries = {
            'USA': [
                'Alabama',
                'California',
                'Illinois'
            ],

            'India': ['Andhra Pradesh',
                'Arunachal Pradesh',
                'Assam',
                'Bihar',
                'Chhattisgarh',
                'Goa',
                'Gujarat',
                'Haryana',
                'Himachal Pradesh',
                'Jammu & Kashmir',
                'Jharkhand',
                'Karnataka',
                'Kerala',
                'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal'],

            'Australia': [
                'New South Wales',
                'Victoria'
            ]
        };
        vm.GetSelectedCountry = function () {
            vm.strCountry = document.getElementById("country").value;
        };

        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    vm.registration.Photo = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        function showStep1() {

            vm.toggleStep1 = true;
            vm.toggleStep2 = false;
            vm.toggleStep3 = false;
            vm.toggleStep4 = false;
            vm.toggleStep5 = false;
        }

        function showStep2() {

            vm.toggleStep1 = false;
            vm.toggleStep2 = true;
            vm.toggleStep3 = false;
            vm.toggleStep4 = false;
            vm.toggleStep5 = false;
        }

        function showStep3() {

            vm.toggleStep1 = false;
            vm.toggleStep2 = false;
            vm.toggleStep3 = true;
            vm.toggleStep4 = false;
            vm.toggleStep5 = false;
        }

        function showStep4() {

            vm.toggleStep1 = false;
            vm.toggleStep2 = false;
            vm.toggleStep3 = false;
            vm.toggleStep4 = true;
            vm.toggleStep5 = false;
        }

        function showStep5() {

            vm.toggleStep1 = false;
            vm.toggleStep2 = false;
            vm.toggleStep3 = false;
            vm.toggleStep4 = false;
            vm.toggleStep5 = true;
        }



        vm.signUp = function () {

            authService.saveRegistration(vm.registration).then(function (response) {

                vm.savedSuccessfully = true;
                vm.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
                startTimer();

            },
             function (response) {
                 var errors = [];
                 for (var key in response.data.modelState) {
                     for (var i = 0; i < response.data.modelState[key].length; i++) {
                         errors.push(response.data.modelState[key][i]);
                     }
                 }
                 vm.message = "Failed to register user due to:" + errors.join(' ');
             });
        };

        var startTimer = function () {
            var timer = $timeout(function () {
                $timeout.cancel(timer);
                $location.path('/login');
            }, 2000);
        }

    };
})();