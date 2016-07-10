/**
 * Created by joelmiller on 10/21/15.
 */

var app = angular.module('MyApp', []);

app.controller('MainController', ['$scope', function($scope){
	this.message = "The Packers...are alright too I guess";
}]);

app.controller('AnotherController', ['$scope', function($scope){
	this.message = "Vikings are cool too?";
}]);

app.controller('YetAnotherController', ['$scope', function($scope){
	this.message = "Go Bears! Jay Cutler is a great QB!";

	$scope.$on('someEventFired', function(event, data){

	});

	$scope.$watch(angular.bind(this, function(){
		return this.message;
	}), function(newValue, oldValue){
		console.log(oldValue + 'changed to ' + newValue);
	});

}]);

app.controller('ControllerAsController', function(){
	this.message = "Good Day World!";
});
