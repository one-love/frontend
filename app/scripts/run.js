'use strict';

module.exports = [
  '$rootScope',
  '$state',
  'loginService',
  function appRunPhase($rootScope, $state, loginService) {

    function routeChecker(event, next, current) {
      var loggedIn = loginService.isLoggedIn();

      if (loggedIn) {
        loginService.attachToken(loggedIn);
      }

      if (!loggedIn && !next.public) {
        event.preventDefault();
        $state.go('login');
      }

      if (loggedIn && next.public) {
        event.preventDefault();
      }

    }

    $rootScope.$on('$stateChangeStart', routeChecker);
  }
];
