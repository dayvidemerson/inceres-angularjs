'use strict';

appResources.factory('PestPointing', ['$resource', 'appConfig', function ($resource, appConfig) {
  return $resource(`${appConfig.backendUrl}/pest-pointing`);
}]);