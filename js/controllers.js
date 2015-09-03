angular.module('courseManager', [])
.controller('courseManagerCtrl', ['$scope', '$location', 'Curso', function($scope, $location, Curso) {


  if(Curso.slides == null) {


    Curso.getSlides().then( function(data) {
      
      console.log("******** slides carregados!!!");     

      Curso.defineSlides(data.data);
       $scope.slides = Curso.slides;
       $scope.slide =  Curso.slides[Curso.currentSlide];
       var template = "/" + Curso.slides[Curso.currentSlide].templateFile;
       $location.path (template);

    }, function(data) {

      console.log("erro ao carregar data");

    });

  } else {
    $scope.slides = Curso.slides;
    $scope.slide =  Curso.slides[Curso.currentSlide];
    var template = "/" + Curso.slides[Curso.currentSlide].templateFile;
    $location.path (template);
  }



  $scope.$watch( function() {
    
    return Curso.currentSlide;

  }, function(newVal, oldVal) {
    
    if(newVal == oldVal) {return}

    
    console.log("Curso.slides: " + Curso.slides.length);
    console.log("Curso.currentSlide: " + Curso.currentSlide);
    console.log("Slide: " + Curso.slides[Curso.currentSlide].templateFile);
    console.log("--------------------");
    
    $scope.slide =  Curso.slides[Curso.currentSlide];
    
    var url = "/" + Curso.slides[Curso.currentSlide].templateFile;

    $location.path (url);
    // }
  });



  function setupData(data) {
    $scope.content = data["data"];
  }

}]);