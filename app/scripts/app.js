'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
    ,'myApp.filters'
    ,'myApp.controllers'

]).
config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/day-list.html', controller: 'DayListCtrl'});
  $routeProvider.when('/tracker/:adate', { templateUrl: 'partials/day.html', controller: 'DayCtrl'});
  $routeProvider.when('/addMeal', { templateUrl: 'partials/addMeal.html', controller: 'AddNewMealCtrl'});
}]);