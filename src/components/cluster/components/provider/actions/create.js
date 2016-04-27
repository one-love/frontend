import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { PROVIDER_CREATE } from '../constants';

export const reset = createAction(PROVIDER_CREATE, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVIDER_CREATE, () => ({
  status: 'pending',
}));

export const success = createAction(PROVIDER_CREATE, provider => ({
  provider,
  status: 'success',
}));

export const fail = createAction(PROVIDER_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = (clusterId, type, properties) =>
  dispatch => {
    console.log(properties);
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers`,
      method: 'post',
      body: {
        type,
        ...properties,
      },
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
  create,
};

export default actions;
