angular.module('ServiceApp').controller('OrangeController', function(LambdaService){
  this.lambda = LambdaService.lambda;

  this.movieData = LambdaService.movieData;

  LambdaService.callMovies();
})
