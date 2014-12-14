'use strict';

module.exports = function loginController($scope, authService, $state) {

  $scope.userLoggingIn = {
    email: '',
    password: ''
  }

  $scope.logIn = function logIn() {
    authService.logIn($scope.userLoggingIn)
      .then(function logInSuccess(response) {
        $state.go('home');
      }, function logInFailed(error) {
        console.log('No pasaran.');
      });
  };
};

