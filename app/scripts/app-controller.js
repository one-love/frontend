'use strict';

module.exports = [
  '$scope',
  'loginService',
  '$state',
  function appController($scope, loginService, $state) {
    $scope.pageError = '';
    $scope.logOut = function logOut() {
      console.log('performing log out');
      loginService.logOut();
      $state.go('login');
    };
  }
];
