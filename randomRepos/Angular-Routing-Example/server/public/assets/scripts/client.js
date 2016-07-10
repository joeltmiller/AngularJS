/**
 * Created by joelmiller on 10/13/15.
 */
var app = angular.module('tuesdayApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{
			templateUrl:'views/home.html',
			controllerAs: 'home',
			controller: 'HomeController'
		})
		.when('/about',{
			templateUrl:'views/about.html',
			controller: 'AboutController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		});

	$locationProvider.html5Mode(true);
});
