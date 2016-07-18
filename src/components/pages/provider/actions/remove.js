import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { PROVIDER_REMOVE } from '../constants';


export const reset = createAction(PROVIDER_REMOVE, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVIDER_REMOVE, () => ({
  status: 'pending',
}));

export const success = createAction(PROVIDER_REMOVE, provider => ({
  provider,
  status: 'success',
}));

export const fail = createAction(PROVIDER_REMOVE, error => ({
  status: 'error',
  error,
}));


export const confirm = createAction(PROVIDER_REMOVE, id => ({
  status: 'confirm',
  provider: {
    id,
  },
}));


export const remove = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/${id}`,
      method: 'DELETE',
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
  remove,
  confirm,
};


export default actions;
