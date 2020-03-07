'use strict';

angular
  .module('fieldNotebook.controllers')
  .controller('PestPointingController', PestPointingController);

PestPointingController.$inject = ['DateService', 'PestPointing'];

function PestPointingController(DateService, PestPointing) {
  var vm = this;

  vm.dateService = DateService;

  vm.pestPointings = [];

  vm.$onInit = function() {
    vm.load();
  }

  vm.load = function() {
    PestPointing.query(function(response) {
      vm.pestPointings = response;
    });
  }

  vm.getTagColor = function(quantity) {
    if (quantity >= 4) {
      return 'inc-tag-green';
    } else if (quantity >= 2) {
      return 'inc-tag-yellow';
    } else {
      return 'inc-tag-red';
    }
  }
}