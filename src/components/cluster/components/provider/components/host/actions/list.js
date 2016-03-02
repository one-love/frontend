import { createAction } from 'redux-actions';
import { fetch } from '../../../../../../../utils';
import { API_URL } from '../../../../../../../backend_url';
import { HOST_LIST } from '../constants';

export const reset = createAction(HOST_LIST, () => ({
  status: 'initial',
  hosts: [],
}));

export const begin = createAction(HOST_LIST, () => ({
  status: 'pending',
  hosts: [],
}));

export const success = createAction(HOST_LIST, hosts => ({
  hosts,
  status: 'success',
}));

export const fail = createAction(HOST_LIST, error => ({
  status: 'error',
  error,
}));

export const get = (clusterId, providerName) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}/hosts`,
      method: 'get',
    })
      .then(hosts => {
        dispatch(success(hosts));
        return hosts;
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
