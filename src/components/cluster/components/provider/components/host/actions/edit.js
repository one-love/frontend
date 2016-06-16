import { createAction } from 'redux-actions';
import { fetch } from '../../../../../../../utils';
import { API_URL } from '../../../../../../../backend_url';
import { HOST_EDIT } from '../constants';

export const reset = createAction(HOST_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(HOST_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(HOST_EDIT, host => ({
  host,
  status: 'success',
}));

export const fail = createAction(HOST_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (clusterId, providerName, hostName, fields) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}/hosts/${hostName}`,
      method: 'PATCH',
      body: fields,
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
  edit,
};

export default actions;
