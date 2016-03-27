import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { SERVICE_DETAIL } from '../constants';

export const reset = createAction(SERVICE_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(SERVICE_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(SERVICE_DETAIL, service => ({
  service,
  status: 'success',
}));

export const fail = createAction(SERVICE_DETAIL, error => ({
  status: 'error',
  error,
}));

export const get = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services/${id}`,
    })
      .then(service => {
        dispatch(success(service));
        return service;
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
  get,
};

export default actions;
