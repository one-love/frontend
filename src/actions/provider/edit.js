import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { PROVIDER_EDIT } from '../../constants/ActionTypes';

export const reset = createAction(PROVIDER_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVIDER_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(PROVIDER_EDIT, provider => ({
  provider,
  status: 'success',
}));

export const fail = createAction(PROVIDER_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (clusterId, providerName, name, type) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/providers/${providerName}`,
      method: 'put',
      body: {
        name,
        type,
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
  edit,
};

export default actions;
