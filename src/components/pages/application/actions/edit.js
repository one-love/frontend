import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { APPLICATION_EDIT } from '../constants';
import { get } from './detail';

export const reset = createAction(APPLICATION_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(APPLICATION_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(APPLICATION_EDIT, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (id, fields) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/applications/${id}`,
      method: 'PATCH',
      body: fields,
    })
      .then(application => {
        dispatch(success(application));
        return application;
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
