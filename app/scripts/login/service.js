'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  '$window',
  function authService($http, API_URL, $q, $window) {

    function authenticate(token) {
        $http.defaults.headers.common['Authorization'] = 'Token ' + token;
        $window.sessionStorage.oneloveAuthToken = token;
    }

    function isLoggedIn() {
      return $window.sessionStorage.oneloveAuthToken;
    }

    function logIn(user) {
      return $http.post(API_URL + 'auth/', user)
        .then(function(response) {
          authenticate(response.data.token);
        });
    }

    return {
      logIn: logIn,
      isLoggedIn: isLoggedIn
    };
  }
];
