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
      return 'images/icons/map-green.png';
    } else if (quantity >= 2) {
      return 'images/icons/map-yellow.png';
    } else {
      return 'images/icons/map-red.png';
    }
  }

  function drawMarkers() {
    let markers = {};

    vm.pestPointings.forEach(pestPointing => {
      markers['marker' + pestPointing.id] = {
        lat: parseInt(pestPointing.latitude),
        lng: parseInt(pestPointing.longitude),
        icon: {
          iconUrl: getTagColor(pestPointing.quantity),
          iconSize: [28, 40]
        },
        message: "<strong>Praga(s):</strong> " + pestPointing.quantity + "<br /><strong>Observações:</strong><br />" + pestPointing.note
      };
    });

    angular.extend($scope, {
      markers: markers
    });
  }
}