'use strict';

angular
  .module('fieldNotebook.services')
  .factory('DateService', DateService);

DateService.$inject = ['appConfig'];

function DateService(appConfig) {
  var service = {};

  service.formatDateTime = formatDateTime;

  return service;

  function formatDateTime(datetime) {
    const date = new Date(datetime);

    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric',
      hour12: false,
      timeZone: appConfig.timeZone
    };

    return new Intl.DateTimeFormat(appConfig.locale, options).format(date);
  }
}