import superagent from 'superagent-bluebird-promise';
import superagentJsonapify from 'superagent-jsonapify';

superagentJsonapify(superagent);
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

/**
 * Get token from backend API and store it in local storage
 */
export function login(argemail, argpassword) {
  superagent.post('http://localhost:5000/api/v0/auth/tokens')
    .send({ email: argemail, password: argpassword })
    .then(
      function success(res) {
        window.localStorage.OneLoveAuthToken = res.body.token;
        return res.body.token;
      }
    )
    .catch(
      function error(err) {
        return err;
      }
    );
}
