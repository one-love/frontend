/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { PROVIDER_CREATE } from '../../constants/ActionTypes';

export const reset = createAction(PROVIDER_CREATE, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVIDER_CREATE, () => ({
  status: 'pending',
}));

export const success = createAction(PROVIDER_CREATE, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(PROVIDER_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = (clusterId, name, galaxy_role) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/applications`,
      method: 'post',
      body: {
        name,
        galaxy_role,
      },
    })
      .then(application => {
        dispatch(success(application));
        return application;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

const actions = {
  reset,
  begin,
  success,
  fail,
  create,
};

export default actions;
