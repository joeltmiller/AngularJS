var app = angular.module('toDoApp', []);

app.controller('TaskController', function($scope){
  $scope.tempTask = '';
  $scope.taskList = [{name:'Make Coffee', complete:false},{name:'Make Pancakes', complete:false}, {name:'World domination', complete:false}];

  $scope.showError = false;

  $scope.addTask = function(){

    if($scope.tempTask === ''){
      $scope.showError = true;
    } else {
      $scope.showError = false;
      console.log('Adding task', $scope.tempTask);
      $scope.taskList.push({name: $scope.tempTask, complete: false});
      $scope.tempTask = '';
    }
  }

  $scope.removeChecked = function(){

    var filtered = $scope.taskList.filter(function(task){
      return task.complete == false;
    });

    console.log('Not Filter (extra pulp)', $scope.taskList);
    console.log('No pulp', filtered);

    $scope.taskList = $scope.taskList.filter(function(task){
      return task.complete == false;
    })
  }


});

app.controller('OtherController', function($scope){
  console.log('Other controller has been loaded');
});
