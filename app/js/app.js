'use strict';


// Declare app level module which depends on filters, and services
angular.module('bpEuler', [
  'ngRoute',
  'ngSanitize',
  'bpEuler.filters',
  'bpEuler.services',
  'bpEuler.directives',
  'bpEuler.controllers',
  'primeNumber',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/problem1', {templateUrl: 'partials/problem1.html', controller: 'bpProblem1'});
  $routeProvider.when('/problem2', {templateUrl: 'partials/problem1.html', controller: 'bpProblem2'});
  $routeProvider.when('/problem3', {templateUrl: 'partials/problem1.html', controller: 'bpProblem3'});
  $routeProvider.when('/problem4', {templateUrl: 'partials/problem1.html', controller: 'bpProblem4'});
  $routeProvider.when('/problem5', {templateUrl: 'partials/problem1.html', controller: 'bpProblem5'});
  $routeProvider.when('/problem6', {templateUrl: 'partials/problem1.html', controller: 'bpProblem6'});
  $routeProvider.when('/problem7', {templateUrl: 'partials/problem1.html', controller: 'bpProblem7'});
  $routeProvider.when('/problem8', {templateUrl: 'partials/problem1.html', controller: 'bpProblem8'});
  $routeProvider.when('/problem9', {templateUrl: 'partials/problem1.html', controller: 'bpProblem9'});
  $routeProvider.otherwise({redirectTo: '/problem1'});
}]);
