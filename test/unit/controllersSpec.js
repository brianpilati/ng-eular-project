'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem1', { $scope: scope });
  }));

  it('should answer "problem 1" with 23 as the answer', function() {
    expect(scope.answer).toBe(23);
  });

  it('should answer "problem 1" with 233168 as the answer', function() {
    scope.upperNumber = 1000;
    scope.calculateAnswer();
    expect(scope.answer).toBe(233168);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem2', { $scope: scope });
  }));

  it('should answer "problem 2" with 10 as the answer', function() {
    expect(scope.answer).toBe(10);
    expect(scope.allArray).toEqual([1, 2, 3, 5, 8]);
    expect(scope.newArray).toEqual([2, 8]);
  });

  it('should answer "problem 2" with 44 as the answer', function() {
    scope.upperNumber = 100;
    scope.calculateAnswer();
    expect(scope.answer).toBe(44);
    expect(scope.allArray).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    expect(scope.newArray).toEqual([2, 8, 34]);
  });

  it('should answer "problem 2" with 44 as the answer', function() {
    scope.upperNumber = 4000000;
    scope.calculateAnswer();
    expect(scope.answer).toBe(4613732);
  });
});
