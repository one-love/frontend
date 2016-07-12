import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { SERVICE_PROVISION } from './constants';


export const reset = createAction(SERVICE_PROVISION, () => ({
  status: 'initial',
}));

export const begin = createAction(SERVICE_PROVISION, () => ({
  status: 'pending',
}));

export const success = createAction(SERVICE_PROVISION, provision => ({
  provision,
  status: 'success',
}));

export const fail = createAction(SERVICE_PROVISION, error => ({
  error,
  status: 'error',
}));

export const provision = (clusterId, serviceId) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/services/${serviceId}/provision`,
    })
      .then(prov => {
        dispatch(success(prov));
        return prov;
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
  provision,
};

export default actions;
