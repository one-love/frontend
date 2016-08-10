import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { PROVIDER_REMOVE } from '../constants';


const reset = createAction(PROVIDER_REMOVE, () => ({
  status: 'initial',
}));

const begin = createAction(PROVIDER_REMOVE, () => ({
  status: 'pending',
}));

const success = createAction(PROVIDER_REMOVE, provider => ({
  provider,
  status: 'success',
}));

const fail = createAction(PROVIDER_REMOVE, error => ({
  status: 'error',
  error,
}));


const confirm = createAction(PROVIDER_REMOVE, id => ({
  status: 'confirm',
  provider: {
    id,
  },
}));


const remove = id =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/${id}`,
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
