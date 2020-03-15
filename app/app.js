'use strict';

let appController = angular.module('fieldNotebook.controllers', []);
let appResources = angular.module('fieldNotebook.resources', []);
let appDirectives = angular.module('fieldNotebook.directives', []);
let appServices = angular.module('fieldNotebook.services', []);

angular.module('fieldNotebook', [
  'ngResource',
  'ui.router',
  'nemLogging',
  'ui-leaflet',
  'fieldNotebook.controllers',
  'fieldNotebook.resources',
  'fieldNotebook.directives',
  'fieldNotebook.services'
]).constant('appConfig', {
  backendUrl: 'https://5e60615bcbbe0600146cb970.mockapi.io/api/v1/'
}).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'pestPointing',
      url: '/apontamento-de-pragas',
      controller: 'PestPointingController',
      controllerAs: 'vm',
      templateUrl: '/app/templates/pest-pointing/list.html'
    })
    .state({
      name: 'pestPointingMap',
      url: '/apontamento-de-pragas/mapa',
      controller: 'PestPointingMapController',
      controllerAs: 'vm',
      templateUrl: '/app/templates/pest-pointing/map.html'
    })
    .state({
      name: 'anthillPointing',
      url: '/apontamento-de-formigueiros',
      controller: 'AnthillPointingController',
      controllerAs: 'vm',
      templateUrl: '/app/templates/anthill-pointing/list.html'
    })
    .state({
      name: 'anthillPointingMap',
      url: '/apontamento-de-formigueiros/mapa',
      controller: 'AnthillPointingMapController',
      controllerAs: 'vm',
      templateUrl: '/app/templates/anthill-pointing/map.html'
    });

  $urlRouterProvider.when('', '/apontamento-de-pragas');
}]);