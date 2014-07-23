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
      //template: '<ul ng-transclude class="menu"></ul>',
      template: '<div ng-transclude class="menu"></div>',
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
      template: '<div><ul>' + 
        '<li ng-click="toggle()"><div class="title">{{title}}</div></li>' +
        '<li class="body" ng-show="showMe" ng-transclude></li>' +
        '</ul></div>',
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
      restrict: "E",
      template: "<div ng-Show='answered'><span ng-Class='{correct: answered, bold: answered}'>Correct: </span><img src='/img/checkMark.jpg' class='checkMark'></img></div>",
      link: function(scope, elm, attrs) {
        scope.$watch('answer', function (v) {
          if (scope.expectedAnswer == scope.answer || scope.eulerAnswer == scope.answer) {
            scope.validated = "Correct";
            scope.answered = true;
          } 
        });
      }
    };
  });
