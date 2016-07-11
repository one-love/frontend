import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { HOST_DETAIL } from '../constants';

export const reset = createAction(HOST_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(HOST_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(HOST_DETAIL, host => ({
  host,
  status: 'success',
}));

export const fail = createAction(HOST_DETAIL, error => ({
  status: 'error',
  error,
}));

export const get = (clusterId, providerName, hostName) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}/hosts/${hostName}`,
    })
      .then(host => {
        dispatch(success(host));
        return host;
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
