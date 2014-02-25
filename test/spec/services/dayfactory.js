'use strict';

describe('Service: dayFactory', function () {

  // load the service's module
  beforeEach(module('myApp'));

  // instantiate service
  var day_Factory;
  beforeEach(inject(function (dayFactory) {
    day_Factory = dayFactory;
  }));

  it('should do something', function () {
    expect(!!day_Factory).to.equal(true);
  });

});
