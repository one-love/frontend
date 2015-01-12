'use strict';

module.exports = function oneLoveConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: require('./app-controller.js'),
      templateUrl: 'scripts/views/home.html',
    })
    .state('login', {
      url: '/login',
      controller: require('./login/controller.js'),
      templateUrl: 'scripts/login/template.html',
      public: true
    });
};
