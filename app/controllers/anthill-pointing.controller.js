'use strict';

appController.controller('AnthillPointingController', ['$uibModal', 'AnthillPointing', function($uibModal, AnthillPointing) {
  let vm = this;

  vm.anthillPointings = [];

  vm.$onInit = function() {
    load();
  }

  function load() {
    AnthillPointing.query(function(response) {
      vm.anthillPointings = response;
    });
  }

  vm.openForm = function() {
    $uibModal.open({
      animation: true,
      templateUrl: '/app/templates/anthill-pointing/form.html',
      controller: 'AnthillPointingFormController',
      controllerAs: 'vm',
      size: 'md'
    }).result.then(function() {
      load();
    });
  }
}]);