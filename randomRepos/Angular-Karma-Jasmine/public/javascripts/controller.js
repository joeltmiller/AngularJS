angular.module('basicApp', []);

angular.module('basicApp')
  .controller('SimpleController', function(){
    var vm = this;

    vm.userInfo = [
      {
        username : 'joel_miller',
        admin :true,
        id : 123
      },
      {
        username : 'mulchitron3000',
        admin : false,
        id : 456
      }]

    vm.getNumUsers = function(){
      return vm.userInfo.length;
    }
  })

angular.module('basicApp')
  .factory('GenericFactory', function($http){

    var cohort = "Lambda";

    var data = {};

    return {
      message: function(){
        return '\'Ello, I\'m a Service';
      },
      name: cohort,
      makeCall: function(){
        $http.get('/dataRoute').then(function(response){
          data.info = response.data;
        })
      },
      data: data
    }

  })
