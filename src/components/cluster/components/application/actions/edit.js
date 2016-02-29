/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { APPLICATION_EDIT } from '../constants';

export const reset = createAction(APPLICATION_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(APPLICATION_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(APPLICATION_EDIT, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_EDIT, error => ({
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
