'use strict';

const appConfig = {
  backendUrl: 'https://5e60615bcbbe0600146cb970.mockapi.io/api/v1/',
  locale: 'pt-BR',
  timeZone: 'America/Fortaleza'
};

angular.module('fieldNotebook')
  .constant('appConfig', appConfig)
  .config(FieldNotebookConfig);

FieldNotebookConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function FieldNotebookConfig($stateProvider, $urlRouterProvider) {
  const pestPointingState = {
    name: 'pestPointing',
    url: '/apontamento-de-pragas',
    controller: 'PestPointingController',
    controllerAs: 'vm',
    templateUrl: '/app/views/pest-pointing/list.html'
  };

  const pestPointingMapState = {
    name: 'pestPointingMap',
    url: '/apontamento-de-pragas/mapa',
    controller: 'PestPointingMapController',
    controllerAs: 'vm',
    templateUrl: '/app/views/pest-pointing/map.html'
  };

  const anthillPointingState = {
    name: 'anthillPointing',
    url: '/apontamento-de-formigueiros',
    controller: 'AnthillPointingController',
    controllerAs: 'vm',
    templateUrl: '/app/views/anthill-pointing/list.html'
  };

  const anthillPointingMapState = {
    name: 'anthillPointingMap',
    url: '/apontamento-de-formigueiros/mapa',
    controller: 'AnthillPointingMapController',
    controllerAs: 'vm',
    templateUrl: '/app/views/anthill-pointing/map.html'
  };

  $stateProvider.state(pestPointingState);
  $stateProvider.state(pestPointingMapState);
  $stateProvider.state(anthillPointingState);
  $stateProvider.state(anthillPointingMapState);
  $urlRouterProvider.when('', '/apontamento-de-pragas');
}