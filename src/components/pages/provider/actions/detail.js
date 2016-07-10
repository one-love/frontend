import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { PROVIDER_DETAIL } from '../constants';

export const reset = createAction(PROVIDER_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(PROVIDER_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(PROVIDER_DETAIL, provider => ({
  provider,
  status: 'success',
}));

export const fail = createAction(PROVIDER_DETAIL, error => ({
  status: 'error',
  error,
}));

export const get = (clusterId, providerName) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}`,
    })
      .then(provider => {
        dispatch(success(provider));
        return provider;
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
