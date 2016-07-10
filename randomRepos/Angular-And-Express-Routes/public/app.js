var app = angular.module('app', ['ngRoute']);

app.factory('FirstService', function(){

    var myObj = {name: "Homer J Simpson"};

    return myObj;

});

app.factory('gitHubService', function(){

    var githubUrl = 'https://api.github.com';

    var runUserRequest = function(username, path) {
        // Return the promise from the $http service
        // that calls the Github API using JSONP
        return $http({
            method: 'JSONP',
            url: githubUrl + '/users/' +
        username + '/' +
        path + '?callback=JSON_CALLBACK'
        });
    }

    return {
        events: function(username) {
           return runUserRequest(username, 'events');
        }
    };


});

app.factory('ThirdService', function(){

    var myObj = {name: "Homer J Simpson"};

    return myObj;

});

app.controller('FirstController', function($scope, FirstService) {
    //$scope.message = "Changing Routes In AngularJS";
    $scope.message = FirstService.name;
    $scope.moe = "moe"
});

app.controller('SecondController', function($scope, FirstService) {
    //$scope.message = "Changing Routes In AngularJS";
    $scope.message = FirstService.name;
})

;

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/moe', {
        templateUrl: 'views/moe.html',
        controller: 'FirstController'
    });

    $locationProvider.html5Mode(true);


}]);
