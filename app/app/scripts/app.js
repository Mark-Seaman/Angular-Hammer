'use strict';

var files      = require('./files');

//var files      = require('../files');

// var read_topics = function (filename)
// {
//     files.read (filename, function (text) { 
//         topics = [  { title:'home', text:text } ];
//     });
// }

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
