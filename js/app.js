angular.module('MainApp', [
               'ngRoute',
               'courseManager'
               ])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: '/templates/blank.html',
    controller: 'courseManagerCtrl'
  }).
  when('/:templateName', {
    controller: 'courseManagerCtrl',
    templateUrl: function(params) {
      console.log('/templates/' + params.templateName + '.html');
      //return '/templates/rota3.html';
      return '/templates/' + params.templateName + '.html';
    }
  }).
  otherwise ({
    redirectTo: '/',
  });
}])
;
