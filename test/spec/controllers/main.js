'use strict';
//var expect = require("chai").expect;

describe('Controller: MainCtrl', function () {
  var MainCtrl,
    scope;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it("Basic test to make sure mocha is running correctly", function () {

    expect("abc").to.equal("abc");
    expect(scope.slide).to.equal('');
    scope.back();
    expect(scope.slide).to.equal('slide-right');
    scope.go();
     expect(scope.slide).to.equal('slide-left');
  });
/*
  // load the controller's module
  

  

  // Initialize the controller and a mock scope
  

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toBeUndefined();
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
*/
});

