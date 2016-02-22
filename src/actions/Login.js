import { createAction } from 'redux-actions';
import { fetch } from '../utils';
import { API_URL } from '../backend_url';
import { LOGIN } from '../constants/ActionTypes';

// ------------------------------------
// Actions
// ------------------------------------
export const begin = createAction(LOGIN, () => ({ status: 'pending' }));

export const success = createAction(LOGIN, json => {
  window.localStorage.OneLoveAuthToken = json.token;
  return {
    token: json.token,
    status: 'success',
  };
});

export const fail = createAction(LOGIN, error => ({
  status: 'error',
  error: error.message,
}));

export const login = (email, password) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/auth/tokens`,
      body: {
        email,
        password,
      },
      contentType: 'application/json',
      method: 'post',
    })
      .then(token => {
        dispatch(success(token));
        return token;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

export const actions = {
  begin,
  success,
  fail,
  login,
};
