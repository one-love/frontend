'use strict';

module.exports = function appRunPhase($rootScope, $state) {
  function routeChecker(event, next, current) {
    console.log('test');
  }

  $rootScope.$on('$stateChangeStart', routeChecker);
};
