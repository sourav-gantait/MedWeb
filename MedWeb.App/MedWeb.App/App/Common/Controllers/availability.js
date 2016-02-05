
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
    
    $scope.dateList = [];
    $scope.addDate = function () {
        var tempDate = {
            date: $scope.dateObject
        };
        $scope.dateList.push(tempDate);
    };
    $scope.removeDate = function (date) {
        var index = $scope.dateList.indexOf(date);
        $scope.dateList.splice(index, 1);
    };
    $scope.fromtimeList = [];
    $scope.addTime = function () {
        var tempTimeforEveryday={
            fromTime: $scope.fromTime,
            toTime: $scope.toTime
        };
        $scope.fromtimeList.push(tempTimeforEveryday);
    };
    $scope.timeForWeekly = [];
    $scope.addTimeforWeekly = function () {
        var tempTime = {
            fromTime: $scope.weeklyFromTime,
            toTime: $scope.weeklyToTime
        };
        $scope.timeForWeekly.push(tempTime);
    };
    $scope.timeforMonthly = [];
    $scope.addTimeForMonthly = function () {
        var tempTimeforMonthly = {
            fromTime: $scope.monthlyFromTime,
            toTime: $scope.monthlyToTime
        };
        $scope.timeforMonthly.push(tempTimeforMonthly);
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