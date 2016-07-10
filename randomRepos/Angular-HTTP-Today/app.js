var app = angular.module('httpApp', []);

app.controller('CallController', function($scope, $http){

  $scope.movie = {}
  $scope.buttonClicked = false;

  $scope.getMovieStuff = function(){

    $http.get('http://www.omdbapi.com/?t=Clerks&y=&plot=short&r=json').then(function(response){
      $scope.buttonClicked = true;
      console.log(response);
      $scope.movie = response.data;
    }

  }

})
