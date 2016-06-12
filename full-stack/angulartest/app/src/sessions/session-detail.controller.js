(function() {
  'use strict';

  angular
      .module('angularTest')
      .controller('DetailController', DetailController);

  function DetailController(sessionService, $location) {

    var vm = this;

    vm.showDetails = true;
    vm.showEdit = false;
    vm.message = 'Session Details';
    vm.data = sessionService.data;
    vm.editValue = sessionService.data.detailSession;
    vm.newNote = '';

    vm.toggle = function() {
      vm.showEdit = !vm.showEdit;
      vm.showDetails = !vm.showDetails;
    };

    vm.save = function() {
      sessionService.modifySession();
      vm.toggle();
    };

    vm.updateNote = function() {
      sessionService.addNote(vm.newNote);
      vm.newNote = '';
    };

  }
})();
