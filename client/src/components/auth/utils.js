/**
 * Return authentication token for One Love
 *
 * @return {String} || undefined
 */
export function getAuthToken() {
  return window.localStorage.OneLoveAuthToken;
}

/**
 * Check if user is logged in or not
 *
 * @return {Boolean}
 */
export function isLoggedIn() {
  return Boolean(getAuthToken());
}


export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace(nextState, '/login/', '');
  }
}
