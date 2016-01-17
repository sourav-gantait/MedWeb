
var app = angular.module("app");
app.controller("available", function ($scope) {
    
    $scope.locations = [
        { name: 'Dum Dum', code: 'dd' },
        { name: 'Garia',code:'ga' },
        { name: 'Jadavpur',code:'jd' }];
});