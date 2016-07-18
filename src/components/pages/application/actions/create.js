import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { APPLICATION_CREATE } from '../constants';

export const reset = createAction(APPLICATION_CREATE, () => ({ status: 'initial' }));
export const begin = createAction(APPLICATION_CREATE, () => ({ status: 'pending' }));

export const success = createAction(APPLICATION_CREATE, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = (serviceId, name, galaxyRole) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services/${serviceId}/applications`,
      method: 'POST',
      body: {
        name,
        galaxy_role: galaxyRole,
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
