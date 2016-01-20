import { createAction, handleActions } from 'redux-actions';
import { fetch } from './utils';

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

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const login = (email, password) => {
  return dispatch => {
    fetch(
      'http://localhost:5000/api/v0/auth/tokens',
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
  [LOGIN]: (state, { payload }) => payload,
}, 1);
