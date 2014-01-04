'use strict';


// Declare app level module which depends on filters, and services
angular.module('bpEuler', [
  'ngRoute',
  'bpEuler.filters',
  'bpEuler.services',
  'bpEuler.directives',
  'bpEuler.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/problem1', {templateUrl: 'partials/problem1.html', controller: 'bpProblem1'});
  $routeProvider.when('/problem2', {templateUrl: 'partials/problem1.html', controller: 'bpProblem2'});
  $routeProvider.otherwise({redirectTo: '/problem1'});
}]);
