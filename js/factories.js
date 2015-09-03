angular.module('MainApp')
.factory('Curso', ['$http', function($http) {

  return {
    
    slides: null,

    getSlides: function() {
      return $http.get('/data/data.json');
    },

    defineSlides: function(data) {
      this.slides = data.slidesArray;
      this.title = data.courseTitle;
    },

    currentSlide: 0,
    title: null,

    nextSlide: function() {

      this.currentSlide++;
      
      if(this.currentSlide > this.slides.length-1) {
        this.currentSlide = 0;
      }

      // console.log("currentSlide agora: " + this.currentSlide);

    },

    previousSlide: function() {
      this.currentSlide--;

      if(this.currentSlide < 0) {
        this.currentSlide = this.slides.length-1;
      }
      // console.log("currentSlide agora: " + this.currentSlide);
    }
  }
}]);