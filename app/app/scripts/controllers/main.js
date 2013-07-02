'use strict';

angular.module('angularHammerApp')
    .controller('MainCtrl', function ($scope) {

        $scope.topics = [];

        $scope.add = function(){
            $scope.topics.push($scope.name)
            $scope.name = ''
        }

        $scope.title = 'Root Page';
        $scope.links = [
            {text:'Root Page', href:'/#/'},
            {text:'Page 2', href:'/#/page'}
        ];
    })
    .controller('PageCtrl', function ($scope) {
        $scope.title = 'Another Page';
        $scope.links = [
            {text:'xxx Root Page', href:'/#/'},
            {text:'xxx Page 2', href:'/#/page'}
        ];
    });
