angular.module('ServiceApp').controller('BlueController', function(LambdaService){
  this.lambda = LambdaService.lambda;

  this.movieData = LambdaService.movieData;

})
