(function() {
  'use strict';

  angular
    .module('angularTest')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/list');

      $stateProvider
        .state('list', {
          url: '/list',
          templateUrl: 'src/sessions/session-list.html',
          controller: 'ListController',
          controllerAs: 'list'
        })
        .state('detail', {
          url: '/detail',
          templateUrl: 'src/sessions/session-detail.html',
          controller: 'DetailController',
          controllerAs: 'detail'
        });
    });
})();
