import { createAction } from 'redux-actions';
import { fetch } from '../../../../../../../utils';
import { API_URL } from '../../../../../../../backend_url';
import { HOST_REMOVE } from '../constants';

export const reset = createAction(HOST_REMOVE, () => ({
  status: 'initial',
}));

export const begin = createAction(HOST_REMOVE, () => ({
  status: 'pending',
}));

export const success = createAction(HOST_REMOVE, host => ({
  host,
  status: 'success',
}));

export const fail = createAction(HOST_REMOVE, error => ({
  status: 'error',
  error,
}));

export const remove = (clusterId, providerName, hostname) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}/hosts/${hostname}`,
      method: 'DELETE',
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
  remove,
};

export default actions;
