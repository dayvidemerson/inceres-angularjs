'use strict';

const modules = [
  'ngResource',
  'ui.router',
  'fieldNotebook.controllers',
  'fieldNotebook.resources',
  'fieldNotebook.services'
];

angular.module('fieldNotebook.controllers', []);
angular.module('fieldNotebook.resources', []);
angular.module('fieldNotebook.services', []);
angular.module('fieldNotebook', modules);