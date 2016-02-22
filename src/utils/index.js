import isomorphicFetch from 'isomorphic-fetch';
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

export function fetch(args) {
  const {
    url,
    body,
    method,
    contentType,
  } = args;
  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method: method ? method : 'get',
    headers: {
      Accept: 'application/json',
      Authorization: `JWT ${getAuthToken()}`,
    },
  };
  if (!isLoggedIn()) {
    delete newargs.headers.Authorization;
  }
  if (contentType) {
    newargs.headers['Content-Type'] = contentType;
  }
  return isomorphicFetch(url, newargs)
    .then(response => {
      const json = response.json();
      if (response.status >= 400) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return json;
    });
}
