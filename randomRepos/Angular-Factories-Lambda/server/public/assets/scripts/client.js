console.log('Loaded client.js');

var app = angular.module('factoryApp', []);

app.controller('ViewController', ['FetchService', function(FetchService){
  console.log('Loaded ViewController');

  //variables
  this.data = FetchService.serviceValue;


  //function req
  FetchService.makeCall();

}]);

app.factory('FetchService', function($http){

  var serviceValue = {};

  var makeCall = function(){
    $http.get('/getBook').then(function(response){
      console.log(response);
      serviceValue.val = response.data;
      console.log(serviceValue);
    })
  }

  return {
    key: {name: 'value'},
    serviceValue: serviceValue,
    makeCall: makeCall
  }

})
