(function() {
  'use strict';

  angular
    .module('angularTest')
    .controller('ListController', function($resource, $location, sessionService) {
      var vm = this;

      vm.data = sessionService.data;

      sessionService.getDetails();

      vm.send = function(session) {
        $location.path('detail');
        // sessionService.setDetailSession(session);
        sessionService.data.detailSession = session;
      };
    });
})();
