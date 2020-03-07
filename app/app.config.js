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

  $stateProvider.state(pestPointingState);
  $urlRouterProvider.when('', '/apontamento-de-pragas');
}