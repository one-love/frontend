/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { REGISTER } from './constants';

// ------------------------------------
// Actions
// ------------------------------------
export const reset = createAction(REGISTER, () => ({
  status: 'initial',
}));

export const begin = createAction(REGISTER, () => ({
  status: 'pending',
}));

export const success = createAction(REGISTER, user => ({
  user,
  status: 'success',
}));

export const fail = createAction(REGISTER, error => ({
  error: error.message,
  status: 'error',
}));

export const register = (email, password, first_name, last_name) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/users/register`,
      body: {
        first_name,
        last_name,
        email,
        password,
      },
      contentType: 'application/json',
      method: 'post',
    })
      .then(user => {
        dispatch(success(user));
        return user;
      })
      .catch(error => {
        dispatch(fail(error));
      });
  };

const actions = {
  begin,
  success,
  fail,
  register,
};

export default actions;
