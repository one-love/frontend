/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { PROVIDER_EDIT } from '../../constants/ActionTypes';

export const reset = createAction(PROVIDER_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVIDER_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(PROVIDER_EDIT, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(PROVIDER_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (clusterId, applicationName, name, galaxy_role) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/applications/${applicationName}`,
      method: 'put',
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
  edit,
};

export default actions;
