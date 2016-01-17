(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

        // Custom modules 
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions
        'kendo.directives',
        // 3rd Party Modules
        'ui.bootstrap', 'LocalStorageModule', 'angular-loading-bar'     // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);
    
    var serviceBase = 'http://localhost:63675/';
  //  var serviceBase = 'http://medweb-authentication.azurewebsites.net/';
    app.constant('ngAuthSettings', {
        apiServiceBaseUri: serviceBase,
        clientId: 'MedClientApp'
    });

        
})();