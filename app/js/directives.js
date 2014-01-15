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
      require: 'ngModel',
      link: function(scope, elm, attrs) {
        scope.$watch('answer', function (v) {
          if (scope.expectedAnswer == scope.answer) {
            scope.validated = "Bingo";
            scope.answered = true;
          } else {
            scope.validated = "";
            scope.answered = false;
          } 
          scope.timer = moment.utc().diff(scope.startTime) / 1000;
        });

        scope.$watch('inputNumber', function (v) {
          scope.startTime = new moment().toDate();
        });
      }
    };
  });
