
var app = angular.module("app");

app.controller("available", function ($scope) {
    
    $scope.locations = [
        { name: 'Dum Dum', code: 'dd' },
        { name: 'Garia',code:'ga' },
        { name: 'Jadavpur', code: 'jd' }];
    $scope.everyweek = "every";
    $scope.everymonth = "everym";
    $scope.weeksunchecked = function () {
        $scope.yes = false;
    };
    $scope.monthsunchecked = function () {
        $scope.yes = false;
    };
    
    
    $scope.cloneweekly = function () {
        var weeklycon = angular.element('#weekly');
        var weeklydiv = angular.element('#container');
        weeklycon.append(weeklydiv.clone());
    };
    $scope.monthlyclone = function () {
        var monthlywrap = angular.element('#monthly');
        var monthlydiv = angular.element('#monthlycontainer');
        monthlywrap.append(monthlydiv.clone());
    };
    $scope.dateList = [];
    $scope.addDate = function () {
        $scope.dateList.push($scope.dateObject);
    };
    $scope.removeDate = function (date) {
        var index = $scope.dateList.indexOf(date);
        $scope.dateList.splice(index, 1);
    };
    $scope.fromtimeList = [];
    $scope.addTime = function () {
        $scope.fromtimeList.push($scope.fromTime+" - "+$scope.toTime);
    };
    $scope.timeForWeekly = [];
    $scope.addTimeforWeekly = function () {
        $scope.timeForWeekly.push($scope.weeklyFromTime+" - "+$scope.weeklyToTime);
    };
    $scope.timeforMonthly = [];
    $scope.addTimeForMonthly = function () {
        $scope.timeforMonthly.push($scope.monthlyFromTime+" - "+$scope.monthlyToTime);
    };
    $scope.removeEverydayTime = function (fromtime) {
        var index = $scope.fromtimeList.indexOf(fromtime);
        $scope.fromtimeList.splice(index, 1);
    };
    $scope.removeWeeklyTime = function (weeklytime) {
        var index = $scope.timeForWeekly.indexOf(weeklytime);
        $scope.timeForWeekly.splice(index, 1);
    };
    $scope.removeMonthlyTime = function (monthlytime) {
        var index = $scope.timeforMonthly.indexOf(monthlytime);
        $scope.timeforMonthly.splice(index, 1);
    };
});