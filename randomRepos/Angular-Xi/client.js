angular.module('funTimeApp', []);

angular.module('funTimeApp').controller('MainController', function($scope){
  $scope.message = "Hello AngularJS World!";

  $scope.handleClick = function() {
    console.log('Message', $scope.message);
  }

  $scope.show = false;

  $scope.pokeList = ['Charmander', 'Pikachu', 'Mew', 'Farfetch\'d', 'Red One', 'Blue One', 'Snoralax'];

  $scope.logPokemon = function(pokeItem){
    console.log(pokeItem);
  }

  $scope.items = [{name: 'Joe', salary: 2}, {name: 'Sally', salary: 6}]

})
