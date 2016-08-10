import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { PROVIDER_DETAIL } from '../constants';

const reset = createAction(PROVIDER_DETAIL, () => ({ status: 'initial' }));
const begin = createAction(PROVIDER_DETAIL, () => ({ status: 'pending' }));

const success = createAction(PROVIDER_DETAIL, provider => ({
  provider,
  status: 'success',
}));

const fail = createAction(PROVIDER_DETAIL, error => ({
  status: 'error',
  error,
}));

const get = (clusterId, providerName) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${clusterId}/providers/${providerName}`,
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
