'use strict';

require('angular');

angular.module('Onelove', [
    require('angular-ui-router'),
    'OneloveServices'
  ])
  .config(require('./config.js'))
  .constant('API_URL', 'https://192.168.33.33/api/v1/')
  .run(require('./run.js'));

angular.module('OneloveServices', [])
  .service('loginService', require('./login/service.js'))
  .controller('loginController', require('./login/controller.js'));
