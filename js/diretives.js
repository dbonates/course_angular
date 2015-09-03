angular.module('MainApp')
.directive('pagination', function(Curso) {
  return {
    scope: {
      total: "=",
      currentSlide: "="
    },
    restrict: 'E',
    templateUrl: '/templates/pagination.html',
    controller: function($scope) {
      
      $scope.$watch( function() {
        return Curso.currentSlide;
      }, function(newVal, oldVal) {
        $scope.currentSlide = newVal + 1;
      });

      $scope.$watch(function () { return Curso.slides }, function (newVal, oldVal) {
          if (Array.isArray(newVal)) {
              // console.log("num de telas mudou para: " + newVal.length);
              $scope.total = newVal.length;
          }
      });
    }
  };
})
.directive('courseTitle', function(Curso) {
  return {
    scope: {
      title: "="
    },
    restrict: 'E',
    templateUrl: 'templates/coursetitle.html',
    controller: function($scope){
      $scope.$watch( function() {
        return Curso.title;
      },
        function(newVal, oldVal) {
          
          $scope.title = newVal;

      });
    }
  };
})
.directive('backBtn', function(Curso) {
  return {
    restrict: 'E',
    templateUrl: '/templates/backbtn.html',
    controller: function($scope) {
     $scope.previous = function() {
      Curso.previousSlide();
     }
    }
  };
})
.directive('forwardBtn', function(Curso) {
  return {
    restrict: 'E',
    templateUrl: 'templates/forwardbtn.html',
    controller: function($scope) {
      $scope.next = function() {
        Curso.nextSlide();
      }
    }
  }
});