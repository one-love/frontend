'use strict';

module.exports = function loginController($scope, loginService, $state) {

  $scope.userLoggingIn = {
    email: '',
    password: ''
  }

  $scope.logIn = function logIn() {
    loginService.logIn($scope.userLoggingIn)
      .then(function logInSuccess(response) {
        $state.go('home');
      }, function logInFailed(error) {
        console.log('No pasaran.');
      });
  };
};

