import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { SERVICE_EDIT } from '../constants';
import { get } from './detail';

const reset = createAction(SERVICE_EDIT, () => ({
  status: 'initial',
}));

const begin = createAction(SERVICE_EDIT, () => ({
  status: 'pending',
}));

const success = createAction(SERVICE_EDIT, service => ({
  service,
  status: 'success',
}));

const fail = createAction(SERVICE_EDIT, error => ({
  status: 'error',
  error,
}));

const edit = (id, fields) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/services/${id}`,
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
