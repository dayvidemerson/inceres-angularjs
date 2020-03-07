'use strict';

angular
  .module('fieldNotebook.resources')
  .factory('PestPointing', PestPointing);

PestPointing.$inject = ['$resource', 'appConfig'];

function PestPointing($resource, appConfig) {
  return $resource(appConfig.backendUrl + 'pest-pointing');
}