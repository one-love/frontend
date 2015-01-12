'use strict';

module.exports = [
  '$scope',
  'loginService',
  '$state',
  function loginController($scope, loginService, $state) {
    $scope.error = false;

    $scope.userLoggingIn = {
      email: '',
      password: ''
    };

    $scope.logIn = function logIn() {
      loginService.logIn($scope.userLoggingIn)
        .then(function logInSuccess() {
          $state.go('home');
          $scope.error = false;
        }, function logInFailed(error) {
          $scope.error = true;
          console.warn(error.message);
        });
    };
  }
];
