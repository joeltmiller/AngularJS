angular.module('ServiceApp').controller('RedController', function(LambdaService){
  this.lambda = LambdaService.lambda;

  this.movieData = LambdaService.movieData;

})
