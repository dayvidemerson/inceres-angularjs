'use strict';

appController.controller('PestPointingController', ['PestPointing', function(PestPointing) {
  let vm = this;

  vm.pestPointings = [];

  vm.pestPointing = {};

  vm.$onInit = function() {
    load();
  }

  vm.save = save;
  vm.resetForm = resetForm;
  vm.getTagColor = getTagColor;

  function load() {
    PestPointing.query(function(response) {
      vm.pestPointings = response;
    });
  }

  function save() {
    vm.pestPointing.datetime = new Date();
    PestPointing.save(vm.pestPointing, function() {
      resetForm();
      load();
      $('#incForm').modal('hide');
    });
  }

  function resetForm() {
    vm.pestPointing = {};
    vm.form.$setPristine();
  }

  function getTagColor(quantity) {
    if (quantity >= 4) {
      return 'inc-tag-green';
    } else if (quantity >= 2) {
      return 'inc-tag-yellow';
    } else {
      return 'inc-tag-red';
    }
  }
}]);