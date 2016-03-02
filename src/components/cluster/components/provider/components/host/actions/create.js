import { createAction } from 'redux-actions';
import { fetch } from '../../../../../../../utils';
import { API_URL } from '../../../../../../../backend_url';
import { HOST_CREATE } from '../constants';

export const reset = createAction(HOST_CREATE, () => ({
  status: 'initial',
}));

export const begin = createAction(HOST_CREATE, () => ({
  status: 'pending',
}));

export const success = createAction(HOST_CREATE, host => ({
  host,
  status: 'success',
}));

export const fail = createAction(HOST_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = (clusterId, providerName, hostname, ip) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}/hosts`,
      method: 'post',
      body: {
        hostname,
        ip,
      },
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
  create,
};

export default actions;
