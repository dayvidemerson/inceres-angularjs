'use strict';

appController.controller('AnthillPointingMapController', ['$scope', 'AnthillPointing', 'MapService', function($scope, AnthillPointing, MapService) {
  let vm = this;
  let mapService = MapService;
  let anthillPointings = [];

  vm.$onInit = function() {
    load();
  }

  function load() {
    AnthillPointing.query(function(response) {
      anthillPointings = response;
      drawMarkers();
    });
  }

  function drawMarkers() {
    let markers = {};

    anthillPointings.forEach(anthillPointing => {
      markers['marker' + anthillPointing.id] = {
        lat: parseInt(anthillPointing.latitude),
        lng: parseInt(anthillPointing.longitude),
        icon: {
          iconUrl: mapService.getIcon(anthillPointing.quantity),
          iconSize: [28, 40]
        },
        message: `<strong>Praga(s):</strong> ${anthillPointing.quantity}<br /><strong>Observações:</strong><br />${anthillPointing.note}`
      };
    });

    angular.extend($scope, {
      markers: markers
    });
  }
}]);