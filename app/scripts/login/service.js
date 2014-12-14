'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  '$window',
  function authService($http, API_URL, $q, $window) {

    function logIn(user) {
      return $http.post(API_URL + 'auth/', user)
        .then(function(response) {
          $http.defaults.headers.common['Authorization'] = 'Token ' +
            response.data.token;
          $window.sessionStorage.oneloveAuthToken = response.data.token;
        });
    }

    return {
      logIn: logIn
    };
  }
];
