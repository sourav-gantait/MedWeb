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
      
        $scope.dateList.push($scope.dateObject);
    };
    $scope.removeDate = function (date) {
        var index = $scope.dateList.indexOf(date);
        $scope.dateList.splice(index, 1);
    };
    $scope.timeList = [];
    $scope.addTime = function () {
        $scope.timeList.push($scope.fromTime+" - "+$scope.toTime);
    };
    $scope.weeklytimeList = [];
    $scope.addWeeklyTime = function () {
        $scope.weeklytimeList.push($scope.weeklyfromTime+" - "+$scope.weeklytoTime);
    };

    $scope.removeEverydayTime = function (time) {
        var index = $scope.timeList.indexOf(time);
        $scope.timeList.splice(index, 1);
    };
    $scope.removeTime = function (weeklytime) {
        var index = $scope.weeklytimeList.indexOf(weeklytime);
        $scope.weeklytimeList.splice(index, 1);
    };
});