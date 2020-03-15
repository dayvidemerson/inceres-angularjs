'use strict';

appResources.factory('AnthillPointing', ['$resource', 'appConfig', function ($resource, appConfig) {
  return $resource(`${appConfig.backendUrl}/anthill-pointing`);
}]);