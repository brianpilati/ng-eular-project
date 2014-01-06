'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('bpEuler.services', []).
  value('version', '0.1');

var primeNumber = angular.module('primeNumber', []);

primeNumber.factory('primeNumber', function() {
  var localPrimeNumber = window.PrimeNumber; // assumes PrimeNumber already been loaded on the page
  return new localPrimeNumber;
});
