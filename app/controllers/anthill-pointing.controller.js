'use strict';

appController.controller('AnthillPointingController', ['AnthillPointing', function(AnthillPointing) {
  let vm = this;

  vm.anthillPointings = [];
  vm.anthillPointing = {};

  vm.$onInit = function() {
    load();
  }

  vm.save = save;
  vm.resetForm = resetForm;
  vm.getTagColor = getTagColor;

  function load() {
    AnthillPointing.query(function(response) {
      vm.anthillPointings = response;
    });
  }

  function save() {
    vm.anthillPointing.datetime = new Date();
    AnthillPointing.save(vm.anthillPointing, function() {
      resetForm();
      load();
      $('#incForm').modal('hide');
    });
  }

  function resetForm() {
    vm.anthillPointing = {};
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