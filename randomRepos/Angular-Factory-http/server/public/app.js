/**
 * Created by joelmiller on 1/13/16.
 */

var app = angular.module('funkyApp', []);

app.controller('MainController', ['$scope', 'NewService', function($scope, NewService){
	$scope.data = NewService.data;
	NewService.makeCall();
}]);

app.factory('NewService', function($http){
	var makeCall = function(){
		$http.get('/thing').then(function(results){
			console.log(results);
			data.results = results;
		});
	};

	var data = {};

	return {
		makeCall : makeCall,
		data : data
	}
});