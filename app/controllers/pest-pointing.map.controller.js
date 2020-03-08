'use strict';

angular
  .module('fieldNotebook.controllers')
  .controller('PestPointingMapController', PestPointingMapController);

PestPointingMapController.$inject = ['$scope', 'DateService', 'PestPointing'];

function PestPointingMapController($scope, DateService, PestPointing) {
  var vm = this;

  vm.dateService = DateService;

  vm.pestPointings = [];

  vm.pestPointing = {};

  vm.$onInit = function() {
    load();
  }

  function load() {
    PestPointing.query(function(response) {
      vm.pestPointings = response;
      drawMarkers();
    });
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

  function drawMarkers() {
    let markers = {};

    vm.pestPointings.forEach(pestPointing => {
      markers['marker' + pestPointing.id] = {
        lat: parseInt(pestPointing.latitude),
        lng: parseInt(pestPointing.longitude),
        message: pestPointing.quantity + ' praga(s)'
      };
    });

    angular.extend($scope, {
      markers: markers
    });
  }
}