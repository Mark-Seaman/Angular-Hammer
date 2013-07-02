'use strict';

var topics =  
    [ { title:'home', text:'Home is where the heart is' },
      { title:'help', text:'Help has arrived at last'   } ];

//var page = 'home';

angular.module('angularHammerApp')

    .controller('MainCtrl', function ($scope) {

        $scope.topics = topics;

        $scope.add = function(){
            $scope.topics.push({ title:$scope.title, text:$scope.text })
        }

        $scope.select_topic = function(topic) {
            for (var o in $scope.topics) {
                if ($scope.topics[o].title===topic) {
                    $scope.page  = $scope.topics[o].title;
                    $scope.title = $scope.topics[o].title;
                    $scope.text  = $scope.topics[o].text;
                    return;
                }
            }
        }
       
        $scope.navigate = function() {
            $scope.select_topic($scope.page);
        }

        $scope.show = function() {
            for (var o in $scope.topics) {
                if ($scope.topics[o].title===$scope.page) {
                    $scope.page  = $scope.topics[o].title;
                    $scope.title = $scope.topics[o].title;
                    $scope.text  = $scope.topics[o].text;
                    return;
                }
            }
            $scope.page  = '';
            $scope.title = '';
            $scope.text  = '';
        }

        $scope.title = '';

        $scope.links = [
            {text:'Root Page', href:'x'},
            {text:'Other Page', href:'page'}
        ];

        $scope.page = 'home';
    })
