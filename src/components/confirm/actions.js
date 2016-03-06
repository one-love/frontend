/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { CONFIRM } from './constants';

export const reset = createAction(CONFIRM, () => ({
  status: 'initial',
}));

export const begin = createAction(CONFIRM, () => ({
  status: 'pending',
}));

export const success = createAction(CONFIRM, user => ({
  user,
  status: 'success',
}));

export const fail = createAction(CONFIRM, error => ({
  error: error.message,
  status: 'error',
}));

export const confirm = (uuid) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/users/confirm/${uuid}`,
      method: 'get',
    })
      .then(user => {
        dispatch(success(user));
        return user;
      })
      .catch(error => {
        dispatch(fail(error));
      });
  };

export const actions = {
  reset,
  begin,
  success,
  fail,
  confirm,
};

export default actions;
