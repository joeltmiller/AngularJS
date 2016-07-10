#AngularJS Routing

Single Page Applications (SPA) are becoming the new standard in web development. They allow us to simulate the feel and experience of mobile/tablet applications. Rather than creating a traditional web site, we’re aiming at creating an “app” that has a unified feel with no page reloads and different data in each page.

Show drawing of SPA’s vs traditional web sites

Let’s start off with some HTML, with no content in the body.

index.html

    <!doctype html>
    <html ng-app="myApp">
      <head>
        <title>My Angular App</title>
        <script src="vendor/angular/angular.min.js"></script>
      </head>
      <body>
      </body>
    </html>
    
ngApp
Notice that we’ve added “ng-app” inside of our html tag again. This will be the name of our application in our JavaScript code. 

    var app = angular.module('myApp', []);

##Review: Controller
Let’s add a controller named “mainCtrl” and pass in the $scope variable. This allows us to add variables to the scope of the current controller. 

    app.controller(‘MainController’, function($scope) {
            $scope.message = 'This is some sweet data from the controller!';
    });

We have to add the ng-controller declaration to the app, and then we have access to that scope’s variables. Let’s do that and add an angular expressions.

    <div id="main" ng-controller="MainController">
            {{ message }}
    </div>

Let’s change this over to the controllerAs syntax

    app.controller(‘MainController’, function() {
      var vm = this;
      vm.message = 'This is some sweet data from the controller!';
    });

    <div id="main" ng-controller="MainController as main">
            {{ main.message }}
    </div>

##Injecting Pages into the Main Layout
Angular allows us to build SPAs really easily by allowing us to inject pages right into our content. We’re going to refactor what we have so far to be a “layout” and create three new pages to serve as content that is swapped out dynamically. There are no page refreshes needed!

Creating the navigation bar
For our demonstration purposes, we’re going to create a UL with three list items, each will be a link to a url that doesn’t exist yet. We’re going to use Angular’s syntax for navigation, which uses a “#” followed by the page location.

    <ul>
         <li><a href="#/"> Home </li>
         <li><a href="#about"> About </li>
         <li><a href="#contact"> Contact </li>
    </ul>

##Creating the directory
Create a new folder called “pages” and add a home, about and contact page to each one.

- pages
-- home.html
-- about.html
-- contact.html

Inside of each page, add a {{ message }} declaration, to show a message, along with a page name.

    <h1>Home</h1>
    <p>{{ message }} </p>

(repeat for each page)

##ngView
ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file. 

Change the main div to the following (we’re also removing the ng-controller directive!)

    <div id="main">
        <ng-view></ng-view>
    </div>

OR

<ng-view></ng-view>

##ngRoute
In order to finish wiring up our JavaScript, we need to inject the ngRoute into our applicaiton!

Add the following script:
<script src="vendor/angular-route/angular-route.min.js"></script>


Now inject it into your application. Add ‘ngRoute’ to your angular module:

    var app = angular.module('myApp', ['ngRoute']);

##Controllers
We’re going to make one controller for each page. Instead of wiring the controllers up using ng-controller, we’ll use our routes configuration to do it. We’ll get to that afterwards.

    app.controller(‘MainController’, function($scope) {
        $scope.message = 'Welcome to the home page!';
    });
    app.controller('aboutCtrl', function($scope) {
        $scope.message = 'Welcome to the about page!';
    });
    app.controller('contactCtrl', function($scope) {
        $scope.message = 'Welcome to the contact page!';
    });

##app.config
And finally, to get everything working together we’ll use app.config.

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

Click each link and watch it change!

##HTML 5 mode
You will notice that the urls only change in the fragment, and it’s not a very pretty url. 

http://localhost:8000/#/
http://localhost:8000/#/about
http://localhost:8000/#/contact

##base url
To enable pretty urls you have to turn on HTML5 mode. It requires a new element on the page, called base. This serves as a reference point for angular when setting up the URLs. In the head of the document you need to add the <base href="/"> element:

    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        …
        <base href="/">
    </head>

##$locationProvider
Now we need to inject $locationProvider into our config function:

Change 

    .config(function($routeProvider) {   …

To:

    .config(function($routeProvider, $locationProvider) {   …

And add the following to the config function:

    $locationProvider.html5Mode(true);


The final config looks like this:

    .config(function($routeProvider, $locationProvider) {

      $routeProvider
          .when('/', {
              templateUrl : 'pages/home.html',
              controller : 'mainCtrl'
          })
          .when('/about', {
              templateUrl : 'pages/about.html',
              controller : 'aboutCtrl'
          })
          .when('/contact', {
              templateUrl : 'pages/contact.html',
              controller : 'contactCtrl'
          });
          $locationProvider.html5Mode(true);
    });

Pretty Links
If you click your links and they no longer work, you may have to swap out the fragment URLs for pretty urls. 

Replace:

    <ul>
         <li><a href="#/"> Home </li>
         <li><a href="#about"> About </li>
         <li><a href="#contact"> Contact </li>
    </ul>

with:

    <ul>
         <li><a href="/"> Home </li>
         <li><a href="/about"> About </li>
         <li><a href="/contact"> Contact </li>
    </ul>

Now click around, and your urls should be pretty! 

http://localhost:8000/

http://localhost:8000/about

http://localhost:8000/contact

The $location service will automatically fallback to the hashbang method for browsers that do not support the HTML5 History API.

This happens transparently to you and you won’t have to configure anything for it to work.
