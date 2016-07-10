var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
	$scope.message = 'Hello Angular';
	$scope.url = 'http://www.cnn.com/money';
	$scope.userId = '456';
	$scope.thisOrThat = '';
	$scope.thing = false;
	$scope.link = 'http://www.google.com';
	$scope.names = ['Pizza', 'Unicorns', 'Robots'];
	$scope.my = {favorite: 'Unicorns'};
}]);