import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { HOST_DETAIL } from '../constants';

const reset = createAction(HOST_DETAIL, () => ({ status: 'initial' }));
const begin = createAction(HOST_DETAIL, () => ({ status: 'pending' }));

const success = createAction(HOST_DETAIL, host => ({
  host,
  status: 'success',
}));

const fail = createAction(HOST_DETAIL, error => ({
  status: 'error',
  error,
}));

const get = (clusterId, providerName, hostName) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${clusterId}/providers/${providerName}/hosts/${hostName}`,
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
