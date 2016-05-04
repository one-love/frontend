import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { SERVICE_REMOVE } from '../constants';

export const reset = createAction(SERVICE_REMOVE, () => ({
  status: 'initial',
}));

export const begin = createAction(SERVICE_REMOVE, () => ({
  status: 'pending',
}));

export const success = createAction(SERVICE_REMOVE, service => ({
  service,
  status: 'success',
}));

export const fail = createAction(SERVICE_REMOVE, error => ({
  status: 'error',
  error,
}));

export const remove = (id) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services/${id}`,
      method: 'DELETE',
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
  remove,
};

export default actions;
