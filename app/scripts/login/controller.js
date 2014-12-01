'use strict';

module.exports = function loginController($scope, authService, $state) {

  $scope.user = {
    username: '',
    password: ''
  }

  $scope.logIn = function logIn() {
    authService.logIn($scope.user)
      .then(function logInSuccess(response) {
        $state.go('home');
      }, function logInFailed(error) {
        console.log('No pasaran.');
      });
  };
};

