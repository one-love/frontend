'use strict';

module.exports = function authService($http, API_URL, $q) {

  function logIn(user) {
    return $http.post(API_URL + 'auth/', user)
      .then(function(response) {
        $http.defaults.headers.common['Authorization'] = 'Token ' +
          response.data.token;
      });
  }

  return {
    logIn: logIn
  };
};
