import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { SERVICE_PROVISION } from './constants';


const reset = createAction(SERVICE_PROVISION, () => ({
  status: 'initial',
}));

const begin = createAction(SERVICE_PROVISION, () => ({
  status: 'pending',
}));

const success = createAction(SERVICE_PROVISION, provision => ({
  provision,
  status: 'success',
}));

const fail = createAction(SERVICE_PROVISION, error => ({
  error,
  status: 'error',
}));

const provision = (clusterId, serviceId) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${clusterId}/services/${serviceId}/provision`,
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
