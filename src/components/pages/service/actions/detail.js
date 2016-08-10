import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { SERVICE_DETAIL } from '../constants';

const reset = createAction(SERVICE_DETAIL, () => ({ status: 'initial' }));
const begin = createAction(SERVICE_DETAIL, () => ({ status: 'pending' }));

const success = createAction(SERVICE_DETAIL, service => ({
  service,
  status: 'success',
}));

const fail = createAction(SERVICE_DETAIL, error => ({
  status: 'error',
  error,
}));

const get = id =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/services/${id}`,
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
