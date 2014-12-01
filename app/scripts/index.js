'use strict';

require('angular');

angular.module('Onelove', [require('angular-ui-router'), 'OneloveServices'])
  .config(require('./config.js'))
  .constant('API_URL', 'http://192.168.33.33/api/v1/')
  .run(require('./run.js'));

angular.module('OneloveServices', [])
  .service('authService', require('./login/service.js'));

