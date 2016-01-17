'use strict';
angular.module('app').factory('authService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var authServiceFactory = {};

    var authentication = {
        isAuth: false,
        userName: "",
        useRefreshTokens: false
    };
    function CreateRegistrationInput(registrationParam)
    {
        var registrationInputObject = {
            Account:
            {
                LoginId: registrationParam.LoginId,
                Password: registrationParam.Password,
                Role: registrationParam.Role
            },
            Citizen:
            {
                Passport:
                {
                    UId: registrationParam.UId,
                    Location: registrationParam.Location,
                    IssueDate: registrationParam.IssueDate,
                    ExpiryDate: registrationParam.ExpiryDate
                },
                FirstName: registrationParam.FirstName,
                MiddleName: registrationParam.MiddleName,
                LastName: registrationParam.LastName,
                AdharId: registrationParam.AdharId,
                PanId: registrationParam.PanId,
                VoterId: registrationParam.VoterId,
                DOB: registrationParam.DOB,
                Photo: registrationParam.Photo
            },
            DigitalProfile: {
                Mobile1: registrationParam.Mobile1,
                Mobile2: registrationParam.Mobile2,
                Landline: registrationParam.Landline,
                PrimaryEmail: registrationParam.PrimaryEmail,
                SecondaryEmail: registrationParam.SecondaryEmail,
                Linkedin: registrationParam.Linkedin,
                Facebook: registrationParam.Facebook,
                Twitter: registrationParam.Twitter,
            },
            Location: {
                Country: registrationParam.Country,
                State: registrationParam.State,
                Zip: registrationParam.Zip,
                Area: registrationParam.Area,
                AddressLine1: registrationParam.AddressLine1,
                AddressLine2: registrationParam.AddressLine2,
                AddressLine3: registrationParam.AddressLine3,
                Landmark: registrationParam.Landmark
            }
        };
        return registrationInputObject;
    };

    var saveRegistration = function (registration) {
        logOut();
        return $http.post("http://medwebusers.azurewebsites.net/" + 'api/CitizenLocationDigitalMasters/SignUpCitizen', JSON.stringify(CreateRegistrationInput(registration)), { headers: { 'Content-Type': 'application/json;charset=utf-8' } }).then(function (response) {
            //return $http.post("http://localhost:50414/" + 'api/CitizenLocationDigitalMasters/SignUpCitizen', JSON.stringify(CreateRegistrationInput(registration)), { headers: { 'Content-Type': 'application/json;charset=utf-8' } }).then(function (response) {
            return response;
        });
    };

    var login = function (loginData) {

        var data = "grant_type=password&client_secret=secret&username=" + loginData.userName + "&password=" + loginData.password;

            data = data + "&client_id=" + ngAuthSettings.clientId;

        var deferred = $q.defer();

        $http.post(serviceBase + 'oauth2/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' } }).success(function (response) {

            localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
            authentication.isAuth = true;
            authentication.userName = loginData.userName;
            authentication.useRefreshTokens = loginData.useRefreshTokens;

            deferred.resolve(response);

        }).error(function (err, status) {
            logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var logOut = function () {

        localStorageService.remove('authorizationData');

        authentication.isAuth = false;
       authentication.userName = "";
       authentication.useRefreshTokens = false;

    };

    var fillAuthData = function () {

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            authentication.isAuth = true;
            authentication.userName = authData.userName;
            authentication.useRefreshTokens = authData.useRefreshTokens;
        }

    };

    var refreshToken = function () {
        var deferred = $q.defer();

        var authData = localStorageService.get('authorizationData');

        if (authData) {

            if (authData.useRefreshTokens) {

                var data = "grant_type=refresh_token&client_secret=secret&refresh_token=" + authData.refreshToken + "&client_id=" + ngAuthSettings.clientId;

                localStorageService.remove('authorizationData');

                $http.post(serviceBase + 'oauth2/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                    localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: response.refresh_token, useRefreshTokens: true });

                    deferred.resolve(response);

                }).error(function (err, status) {
                    logOut();
                    deferred.reject(err);
                });
            }
        }

        return deferred.promise;
    };
  


    authServiceFactory.saveRegistration = saveRegistration;
    authServiceFactory.login = login;
    authServiceFactory.logOut = logOut;
    authServiceFactory.fillAuthData = fillAuthData;
    authServiceFactory.authentication = authentication;
    authServiceFactory.refreshToken = refreshToken;
    return authServiceFactory;
}]);