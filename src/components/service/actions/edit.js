import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { SERVICE_EDIT } from '../constants';
import { get } from './detail';

export const reset = createAction(SERVICE_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(SERVICE_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(SERVICE_EDIT, service => ({
  service,
  status: 'success',
}));

export const fail = createAction(SERVICE_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (id, fields) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services/${id}`,
      method: 'PATCH',
      body: fields,
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
  edit,
  get,
};

export default actions;
