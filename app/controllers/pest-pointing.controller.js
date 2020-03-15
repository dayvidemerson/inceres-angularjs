'use strict';

appController.controller('PestPointingController', ['$uibModal', 'PestPointing', function($uibModal, PestPointing) {
  let vm = this;

  vm.pestPointings = [];

  vm.$onInit = function() {
    load();
  }

  function load() {
    PestPointing.query(function(response) {
      vm.pestPointings = response;
    });
  }

  vm.openForm = function() {
    $uibModal.open({
      animation: true,
      templateUrl: '/app/templates/pest-pointing/form.html',
      controller: 'PestPointingFormController',
      controllerAs: 'vm',
      size: 'md'
    }).result.then(function() {
      load();
    });
  }
}]);