'use strict';

/* Directives */


angular.module('bpEuler.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('bpProblemSolved', function() {
    return {
      //require: 'ngModel',
      link: function(scope, elm, attrs) {
        if (scope.expectedAnswer == scope.answer) {
          elm.text("Correct");
        } else {
          elm.text("Not Correct");
        }
      }
    };
  });
