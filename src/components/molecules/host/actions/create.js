import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { HOST_CREATE } from '../constants';


const reset = createAction(HOST_CREATE, () => ({
  status: 'initial',
}));

const begin = createAction(HOST_CREATE, () => ({
  status: 'pending',
}));

const success = createAction(HOST_CREATE, host => ({
  host,
  status: 'success',
}));

const fail = createAction(HOST_CREATE, error => ({
  status: 'error',
  error,
}));


const create = (clusterId, providerName, hostname, ip) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${clusterId}/providers/${providerName}/hosts`,
      method: 'POST',
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
