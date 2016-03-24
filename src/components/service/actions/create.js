import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { SERVICE_CREATE } from '../constants';

export const reset = createAction(SERVICE_CREATE, () => ({
  status: 'initial',
}));

export const begin = createAction(SERVICE_CREATE, () => ({
  status: 'pending',
}));

export const success = createAction(SERVICE_CREATE, service => ({
  service,
  status: 'success',
}));

export const fail = createAction(SERVICE_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = name =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services`,
      method: 'post',
      body: {
        name,
      },
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
  create,
};

export default actions;
