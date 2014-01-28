'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'), ['primeNumbers']);

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem1', { $scope: scope });
  }));

  it('should answer "problem 1" with 23 as the answer', function() {
    expect(scope.answer).toBe(23);
  });

  it('should answer "problem 1" with 233168 as the answer', function() {
    scope.inputNumber = 1000;
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
    scope.inputNumber = 100;
    scope.calculateAnswer();
    expect(scope.answer).toBe(44);
    expect(scope.allArray).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    expect(scope.newArray).toEqual([2, 8, 34]);
  });

  it('should answer "problem 2" with 44 as the answer', function() {
    scope.inputNumber = 4000000;
    scope.calculateAnswer();
    expect(scope.answer).toBe(4613732);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope, primeNumber) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem3', { $scope: scope, 'primeNumber': primeNumber});
  }));

  it('should answer "problem 3" with 13195 as the answer', function() {
    expect(scope.inputNumber).toBe(13195);
    expect(scope._knownFactors).toEqual([5, 7, 13, 29]);
    expect(scope.answer).toBe(29);
  });

  it('should answer "problem 3" with 1 as the answer', function() {
    scope.inputNumber = 1;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(1);
    expect(scope._knownFactors).toEqual([1]);
    expect(scope.answer).toBe(1);
  });

  it('should answer "problem 3" with 2 as the answer', function() {
    scope.inputNumber = 2;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(2);
    expect(scope._knownFactors).toEqual([2]);
    expect(scope.answer).toBe(2);
  });

  it('should answer "problem 3" with 8 as the answer', function() {
    scope.inputNumber = 8;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(8);
    expect(scope._knownFactors).toEqual([2, 2, 2]);
    expect(scope.answer).toBe(2);
  });


  it('should answer "problem 3" with 21 as the answer', function() {
    scope.inputNumber = 21;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(21);
    expect(scope._knownFactors).toEqual([3, 7]);
    expect(scope.answer).toBe(7);
  });

  it('should answer "problem 3" with 600851475143 as the answer', function() {
    scope.inputNumber = 600851475143;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(600851475143);
    expect(scope._knownFactors).toEqual([71, 839, 1471, 6857]);
    expect(scope.answer).toBe(6857);
  });

});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem4', { $scope: scope });
  }));

  it('should answer "problem 4" with 99 as the answer', function() {
    expect(scope.answer).toBe(9009);
    expect(scope.outerNumber).toBe(91);
    expect(scope.innerNumber).toBe(99);
    expect(scope.counter).toBe(9801);
  });

  it('should answer "problem 4" with 999 as the answer', function() {
    scope.inputNumber = 999;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(999);
    expect(scope.answer).toBe(906609);
    expect(scope.outerNumber).toBe(913);
    expect(scope.innerNumber).toBe(993);
    expect(scope.counter).toBe(998001);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem5', { $scope: scope });
  }));

  it('should answer "problem 5" with 10 as the answer', function() {
    expect(scope.answer).toBe(2520);
    expect(scope.counter).toBe(16);
  });

  it('should answer "problem 5" with 20 as the answer', function() {
    scope.inputNumber = 20;
    scope.calculateAnswer();
    expect(scope.inputNumber).toBe(20);
    expect(scope.answer).toBe(232792560);
    expect(scope.counter).toBe(31);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem6', { $scope: scope });
  }));

  it('should answer "problem 6" with 10 as the answer', function() {
    expect(scope.sumOfSquares).toBe(385);
    expect(scope.squareOfSums).toBe(3025);
    expect(scope.answer).toBe(2640);
    expect(scope.counter).toBe(11);
  });

  it('should answer "problem 6" with 10 as the answer', function() {
    scope.inputNumber = 100;
    scope.calculateAnswer();
    expect(scope.sumOfSquares).toBe(338350);
    expect(scope.squareOfSums).toBe(25502500);
    expect(scope.answer).toBe(25164150);
    expect(scope.counter).toBe(101);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem7', { $scope: scope });
  }));

  it('should answer "problem 7" with 6 as the answer', function() {
    expect(scope.answer).toBe(13);
    expect(scope.counter).toBe(8);
  });

  /*it('should answer "problem 8" with 10 as the answer', function() {
    scope.inputNumber = 10001;
    scope.calculateAnswer();
    expect(scope.answer).toBe(104743);
    expect(scope.counter).toBe(52373);
  });
  */

  it('should answer "problem 8" with 10 as the answer', function() {
    scope.inputNumber = 1000;
    scope.calculateAnswer();
    expect(scope.answer).toBe(7919);
    expect(scope.counter).toBe(3961);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem8', { $scope: scope });
  }));

  it('should answer "problem 8" with 60 as the answer', function() {
    expect(scope.answer).toBe(scope.expectedAnswer);
    expect(scope.counter).toBe(13);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblem9', { $scope: scope });
  }));

  it('should answer "problem 9" with a as 3 and b as 4 as the answer', function() {
    expect(scope.aNumber).toBe(3);
    expect(scope.bNumber).toBe(4);
    expect(scope.cNumber).toBe(5);
    expect(scope.sumAnswer).toBe(12);
    expect(scope.answer).toBe(scope.expectedAnswer);
  });

  it('should answer "problem 9" with a as variable and b as variable as the answer', function() {
    scope.inputNumber = 1000; 
    scope.calculateAnswer();
    var pythagorean = 430;

    expect(scope.aNumber).toBe(200);
    expect(scope.bNumber).toBe(375);
    expect(scope.cNumber).toBe(425);
    expect(scope.sumAnswer).toBe(1000);
    expect(scope.answer).toBe(31875000);
  });
});

describe('controllers', function(){
  beforeEach(module('bpEuler.controllers'));

  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('bpProblemBlank', { $scope: scope });
  }));

  it('should answer "problem Blank" with 10 as the answer', function() {
    expect(scope.answer).toBe(20);
  });
});
