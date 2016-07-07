import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { PROVISION_EDIT } from '../constants';
import { get } from './detail';


export const reset = createAction(PROVISION_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVISION_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(PROVISION_EDIT, provision => ({
  provision,
  status: 'success',
}));

export const fail = createAction(PROVISION_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (id, fields) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/provisions/${id}`,
      method: 'PATCH',
      body: fields,
    })
      .then(provision => {
        dispatch(success(provision));
        return provision;
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
  get,
};

export default actions;
