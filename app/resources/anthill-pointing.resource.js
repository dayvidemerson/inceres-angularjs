'use strict';

angular
  .module('fieldNotebook.resources')
  .factory('AnthillPointing', AnthillPointing);

  AnthillPointing.$inject = ['$resource', 'appConfig'];

function AnthillPointing($resource, appConfig) {
  return $resource(appConfig.backendUrl + 'anthill-pointing');
}