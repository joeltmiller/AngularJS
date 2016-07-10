var app = angular.module('reqApp', []);

app.controller('OrangeController', function($scope, $http){
  $scope.message = "w00t";
  $scope.instructors = [];
  $scope.staff = [];

  $http.get('/instructors').then(function(response){
    $scope.instructors = response.data;
  });

  $http.get('/staff').then(function(response){
    $scope.staff = response.data;
  });

})
