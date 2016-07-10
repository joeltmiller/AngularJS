var app = angular.module('routerApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/aboutUs', {
      templateUrl: 'views/aboutUs.html',
      controller: 'AboutUsController',
      controllerAs: 'about'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })

  $locationProvider.html5Mode(true);

}])

app.controller('HomeController', function(){
  this.message = "Flannel kogi leggings ennui, normcore organic jean shorts. Messenger bag meh farm-to-table paleo synth, shoreditch ramps bespoke. Farm-to-table readymade post-ironic, banh mi authentic locavore bicycle rights. PBR&B four dollar toast sartorial celiac waistcoat, blog meggings normcore irony gochujang echo park YOLO cred. Selfies distillery mixtape, mlkshk disrupt church-key locavore banjo intelligentsia williamsburg taxidermy butcher photo booth. Sriracha iPhone affogato, single-origin coffee tote bag whatever polaroid skateboard cronut. Offal VHS DIY, seitan messenger bag pork belly meh."
})
app.controller('AboutUsController', function(){
  this.message = "Tilde PBR&B yr, pinterest fap listicle flexitarian vegan green juice direct trade ramps godard. Flannel synth etsy truffaut before they sold out dreamcatcher. Offal portland pinterest, small batch farm-to-table authentic pork belly heirloom readymade celiac aesthetic bushwick beard listicle. Normcore bicycle rights flannel VHS. Dreamcatcher kitsch man braid, bushwick deep v neutra cornhole. Fanny pack yr leggings authentic chambray, lomo knausgaard vegan tousled intelligentsia chartreuse affogato viral. Health goth craft beer dreamcatcher, celiac stumptown pug lo-fi ugh ethical direct trade bitters ennui."
})
app.controller('ContactController', function(){
  this.message = "Flannel kogi leggings ennui, normcore organic jean shorts. Messenger bag meh farm-to-table paleo synth, shoreditch ramps bespoke. Farm-to-table readymade post-ironic, banh mi authentic locavore bicycle rights. PBR&B four dollar toast sartorial celiac waistcoat, blog meggings normcore irony gochujang echo park YOLO cred. Selfies distillery mixtape, mlkshk disrupt church-key locavore banjo intelligentsia williamsburg taxidermy butcher photo booth. Sriracha iPhone affogato, single-origin coffee tote bag whatever polaroid skateboard cronut. Offal VHS DIY, seitan messenger bag pork belly meh."
})
app.controller('MainController', function(){
  this.message = "Blah";
})
