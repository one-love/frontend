import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { PROVIDER_LIST } from '../constants';

export const reset = createAction(PROVIDER_LIST, () => ({
  status: 'initial',
  providers: [],
}));

export const begin = createAction(PROVIDER_LIST, () => ({
  status: 'pending',
  providers: [],
}));

export const success = createAction(PROVIDER_LIST, providers => ({
  providers,
  status: 'success',
}));

export const fail = createAction(PROVIDER_LIST, error => ({
  status: 'error',
  error,
}));

export const get = clusterId =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers`,
      method: 'get',
    })
      .then(providers => {
        dispatch(success(providers));
        return providers;
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
