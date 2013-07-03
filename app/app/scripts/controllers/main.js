'use strict';

var topics =  
    [ { title:'home', text:'Home is where the heart is' },
      { title:'help', text:'Help has arrived at last'   } ];


//var page = 'home';

angular.module('angularHammerApp')

    .controller('MainCtrl', function ($scope) {

        $scope.topics = topics;

        $scope.editing = false;

        $scope.title = '';

        $scope.clear = function(){
            $scope.page  = '';
            $scope.title = '';
            $scope.text  = '';
        }
        
        $scope.add = function(){
            $scope.topics.push({ title:$scope.title, text:$scope.text })
            $scope.editing = false;
        }

        $scope.select_topic = function(topic,autoclear=false) {
            for (var o in $scope.topics) {
                if ($scope.topics[o].title===topic) {
                    $scope.page  = $scope.topics[o].title;
                    $scope.title = $scope.topics[o].title;
                    $scope.text  = $scope.topics[o].text;
                    return;
                }
            }
            if (autoclear) { clear() }
        }
       
        $scope.navigate = function() {
            $scope.select_topic($scope.page, false);
        }

        $scope.page = 'home';
        $scope.navigate();

    })
