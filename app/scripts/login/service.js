'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  '$window',
  function loginService($http, API_URL, $q, $window) {

    function attachToken(token) {
      $http.defaults.headers.common['Authorization'] = 'JWT ' + token;
    }

    function authenticate(token) {
        attachToken(token);
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
      attachToken: attachToken,
      isLoggedIn: isLoggedIn
    };
  }
];
