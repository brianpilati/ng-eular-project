'use strict';

/* Directives */


angular.module('bpEuler.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('accordion', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      template: '<ul ng-transclude class="menu"></ul>',
      controller: function() {
        var expanders = [];

        this.gotOpened = function(selectedExpander) {
          angular.forEach(expanders, function(expander) {
            if (selectedExpander != expander) {
              expander.showMe = false;
            }
          });
        }

        this.addExpander = function(expander) {
          expanders.push(expander);
        }
      }
    }
  })
  .directive('expander', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      require: '^?accordion',
      scope: { title:'=expanderTitle'},
      template: '<li>' +
        '<span class="title" ng-click="toggle()">{{title}}</span>' +
        '<spanclass="body" ng-show="showMe" ng-transclude></span>' +
        '</li>',
      link: function(scope, element, attrs, accordionController) {
        scope.showMe = false;
        accordionController.addExpander(scope);

        scope.toggle = function toggle() {
          scope.showMe = !scope.showMe;
          accordionController.gotOpened(scope);
        }
      }
    }
  })
  .directive('bpInputNumber', function() {
    return {
      restrict: "E",
      replace: true,
      template: "<span class='bold'></span>",
      link: function(scope, elm, attrs) {
        scope.$watch('inputNumber', function (v) {
          elm.html(scope.inputNumber);
        });
      }
    };
  })
  .directive('bpProblemSolved', function() {
    return {
      link: function(scope, elm, attrs) {
        scope.$watch('answer', function (v) {
          if (scope.expectedAnswer == scope.answer) {
            scope.validated = "Correct";
            scope.answered = true;
          } else {
            scope.validated = "";
            scope.answered = false;
          } 
        });
      }
    };
  });
