import { createAction, handleActions } from 'redux-actions';
import { fetch } from '../../utils';

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN';

// ------------------------------------
// Actions
// ------------------------------------
export const saveToken = createAction(LOGIN, json => {
  window.localStorage.OneLoveAuthToken = json.token;
  return json;
});

export const login = (email, password) => {
  return dispatch => {
    fetch(
      'http://onelove.vagrant:5000/api/v0/auth/tokens',
      {
        email,
        password,
      },
      'post'
    )
      .then(json => {
        dispatch(saveToken(json));
        return json;
      })
      .catch(error => {
        console.log('in catch', error);
      });
  };
};

export const actions = {
  saveToken,
  login,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  LOGIN: (state, { payload }) => payload,
}, 1);
