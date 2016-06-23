

app.controller('RedController', function(LambdaService){
  this.lambda = LambdaService.lambda;
})

app.controller('OrangeController', function(LambdaService){
  this.lambda = LambdaService.lambda;
})

app.factory('LambdaService', function(){
  var lambda = {
    garageOpen: true,
    bestCohort: 'bahhh',
    goat: false,
    instructors: ['Joel', 'Ryan', 'Millie'],
    percentAwesome: 100,
    numSick: 0
  };

  return {
    lambda: lambda
  }
})
