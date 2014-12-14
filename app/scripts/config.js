'use strict';

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function oneLoveConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: require('./app-controller.js'),
        templateUrl: 'scripts/views/home.html'
      });
  }
];
