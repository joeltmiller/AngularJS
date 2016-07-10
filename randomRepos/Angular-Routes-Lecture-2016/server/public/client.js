var app = angular.module('routeApp', ['ngRoute']);

app.controller('mainCtrl', function(){

})
app.controller('aboutCtrl', function(){

})
app.controller('contactCtrl', function(){

})


app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainCtrl'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutCtrl'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactCtrl'
    });
});
