appServices.factory('MapService', function() {
  let services = {};

  services.getIcon = function(quantity) {
    if (quantity >= 4) {
      return 'images/icons/map-green.png';
    }

    if (quantity >= 2) {
      return 'images/icons/map-yellow.png';
    }

    return 'images/icons/map-red.png';
  }

  return services;
});