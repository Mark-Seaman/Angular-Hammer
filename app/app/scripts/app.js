'use strict';

angular.module('angularHammerApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) 
      .when('/page', {
        templateUrl: 'views/main.html',
        controller: 'PageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
