var app = angular.module("app");
app.controller ("unavailable", function ($scope) {
    $scope.locations = [
        { name: 'Dum Dum', code: 'dd' },
        { name: 'Garia', code: 'ga' },
        { name: 'Jadavpur', code: 'jd' }];
    $scope.everyweek = "every";
    $scope.weeksunchecked = function () {
        $scope.yes = false;
    };
    $scope.dateList = [];
    $scope.cloneweekly = function () {
        var weeklycon = angular.element('#weekly');
        var weeklydiv = angular.element('#container');
        weeklycon.append(weeklydiv.clone());
    };
    $scope.addDate = function () {
        var tempDate = { date: $scope.dateObject };
        $scope.dateList.push(tempDate);
    };
    $scope.removeDate = function (date) {
        var index = $scope.dateList.indexOf(date);
        $scope.dateList.splice(index, 1);
    };
    $scope.timeList = [];
    $scope.addTime = function () {
        var tempTimeforEveryday = {
            fromTime: $scope.fromTime,
            toTime: $scope.toTime
        };
        $scope.timeList.push(tempTimeforEveryday);
    };
    $scope.weeklytimeList = [];
    $scope.addWeeklyTime = function () {
        var tempTimeforWeekly = {
            fromTime: $scope.weeklyfromTime,
            toTime: $scope.weeklytoTime
        };
        $scope.weeklytimeList.push(tempTimeforWeekly);
    };
    $scope.MonthlytimeList = [];
    $scope.addTimeForMonthly = function () {
        var tempTimeForMonthly = {
            fromTime: $scope.monthlyfromTime,
            toTime: $scope.monthlytoTime
        };
        $scope.MonthlytimeList.push(tempTimeForMonthly);
    };

    $scope.removeEverydayTime = function (time) {
        var index = $scope.timeList.indexOf(time);
        $scope.timeList.splice(index, 1);
    };
    $scope.removeTime = function (weeklytime) {
        var index = $scope.weeklytimeList.indexOf(weeklytime);
        $scope.weeklytimeList.splice(index, 1);
    };
    $scope.removeTimeForMonthly = function (monthlytime) {
        var index = $scope.MonthlytimeList.indexOf(monthlytime);
        $scope.MonthlytimeList.splice(index, 1);
    };
    
});