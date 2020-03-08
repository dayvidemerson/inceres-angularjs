'use strict';

angular
  .module('fieldNotebook.controllers')
  .controller('AnthillPointingMapController', AnthillPointingMapController);

AnthillPointingMapController.$inject = ['$scope', 'DateService', 'AnthillPointing'];

function AnthillPointingMapController($scope, DateService, AnthillPointing) {
  var vm = this;

  vm.dateService = DateService;

  vm.anthillPointings = [];

  vm.anthillPointing = {};

  vm.$onInit = function() {
    load();
  }

  function load() {
    AnthillPointing.query(function(response) {
      vm.anthillPointings = response;
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

    vm.anthillPointings.forEach(anthillPointing => {
      markers['marker' + anthillPointing.id] = {
        lat: parseInt(anthillPointing.latitude),
        lng: parseInt(anthillPointing.longitude),
        icon: {
          iconUrl: getTagColor(anthillPointing.quantity),
          iconSize: [28, 40]
        },
        message: "<strong>Praga(s):</strong> " + anthillPointing.quantity + "<br /><strong>Observações:</strong><br />" + anthillPointing.note
      };
    });

    angular.extend($scope, {
      markers: markers
    });
  }
}