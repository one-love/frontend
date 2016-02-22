import { createAction } from 'redux-actions';
import { fetch } from '../utils';
import { API_URL } from '../backend_url';
import { LOGIN } from '../constants/ActionTypes';

// ------------------------------------
// Actions
// ------------------------------------
export const saveToken = createAction(LOGIN, json => {
  window.localStorage.OneLoveAuthToken = json.token;
  return {
    token: json.token,
    status: 'success',
  };
});

export const beginLogin = createAction(LOGIN, () => ({ status: 'pending' }));


export const errorLogin = createAction(LOGIN, error => ({
  status: 'error',
  error: error.message,
}));


export const login = (email, password) =>
  dispatch => {
    dispatch(beginLogin());
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
        dispatch(saveToken(token));
        return token;
      })
      .catch(error => {
        dispatch(errorLogin(error));
      });
  };


export const actions = {
  saveToken,
  login,
};
