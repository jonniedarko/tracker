var app = angular.module('myApp.filters', [])

app.filter('momentDate', function() {
  return function(input) {
  	console.log("input: "+input);
  	var d = moment(input, 'YYYYMMDD');
  	console.log("input: "+d);
  	console.log("d.format('dddd') "+d.format('dddd'));
    return d.format('dddd');
  };
});

app.filter('moment', function() {
  return function(input, dtformat) {
    return moment(input).format(dtformat);
  };
});
