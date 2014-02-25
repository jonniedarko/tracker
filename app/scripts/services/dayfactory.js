'use strict';

var app = angular.module('myApp.factories',[]);
app.factory('dayFactory', function () {
    // Public API here
    var allDays = [{date: new Date(2014, 2-1, 17), kcals: 2600 }
          ,{ date: new Date(2014, 2-1, 18), kcals: 2500 }
          ,{ date: new Date(2014, 2-1, 19), kcals: 2450 }
          ,{ date: new Date(2014, 2-1, 20), kcals: 2600 }
          ,{ date: new Date(2014, 2-1, 21), kcals: 2199 }
          ,{ date: new Date(2014, 2-1, 22), kcals: 2340 }
          ,{ date: new Date(2014, 2-1, 23), kcals: 1900 }
        ]; 

    return {
      getAllDays: function () {
        return allDays;
      }
      ,addDay: function(day){
        allDays.push(day);
      }
    };
  });
