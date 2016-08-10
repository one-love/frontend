import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { PROVISION_EDIT } from '../constants';
import { get } from './detail';


const reset = createAction(PROVISION_EDIT, () => ({
  status: 'initial',
}));

const begin = createAction(PROVISION_EDIT, () => ({
  status: 'pending',
}));

const success = createAction(PROVISION_EDIT, provision => ({
  provision,
  status: 'success',
}));

const fail = createAction(PROVISION_EDIT, error => ({
  status: 'error',
  error,
}));

const edit = (id, fields) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/provisions/${id}`,
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
