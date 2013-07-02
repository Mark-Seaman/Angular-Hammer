'use strict';

angular.module('angularHammerApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) 
      .when('/add', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          action: 'add'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
