angular.module('ServiceApp').factory('LambdaService', function($http){
  var lambda = {
    garageOpen: true,
    bestCohort: 'bahhh',
    goat: false,
    instructors: ['Joel', 'Ryan', 'Millie'],
    percentAwesome: 100,
    numSick: 0
  };

  var movieData = {}; //this could be called data

  var callMovies = function(){
    $http.get('http://www.omdbapi.com/?t=Shrek&y=&plot=short&r=json').then(function(response){
      console.log(response);
      movieData.omdb = response.data; //this could be called user
    })
  }

  return {
    lambda: lambda,
    callMovies: callMovies,
    movieData: movieData
  }
})
