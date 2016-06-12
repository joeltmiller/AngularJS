var app = angular.module('app', []);

app.controller('ParentController', function(){
  // $scope.obj = {name:''};
  this.name = 'Joel';
});

app.controller('ChildController', function($scope){
  // $scope.obj = {name:''};
});
