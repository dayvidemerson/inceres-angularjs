'use strict';

appController.controller('PestPointingMapController', ['$scope', 'PestPointing', 'MapService', function ($scope, PestPointing, MapService) {
  let vm = this;
  let mapService = MapService;

  vm.pestPointings = [];

  vm.$onInit = function() {
    load();
  }

  function load() {
    PestPointing.query(function(response) {
      vm.pestPointings = response;
      drawMarkers();
    });
  }

  function drawMarkers() {
    let markers = {};

    vm.pestPointings.forEach(pestPointing => {
      markers['marker' + pestPointing.id] = {
        lat: parseInt(pestPointing.latitude),
        lng: parseInt(pestPointing.longitude),
        icon: {
          iconUrl: mapService.getIcon(pestPointing.quantity),
          iconSize: [28, 40]
        },
        message: "<strong>Praga(s):</strong> " + pestPointing.quantity + "<br /><strong>Observações:</strong><br />" + pestPointing.note
      };
    });

    angular.extend($scope, {
      markers: markers
    });
  }
}]);