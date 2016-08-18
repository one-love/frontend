import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { PROVIDER_EDIT } from '../constants';

const reset = createAction(PROVIDER_EDIT, () => ({
  status: 'initial',
}));

const begin = createAction(PROVIDER_EDIT, () => ({
  status: 'pending',
}));

const success = createAction(PROVIDER_EDIT, provider => ({
  provider,
  status: 'success',
}));

const fail = createAction(PROVIDER_EDIT, error => ({
  status: 'error',
  error,
}));

const edit = (cId, pName, fields) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${cId}/providers/${pName}`,
      method: 'PATCH',
      body: fields,
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
