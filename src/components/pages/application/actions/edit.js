import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { APPLICATION_EDIT } from '../constants';
import { get } from './detail';

const reset = createAction(APPLICATION_EDIT, () => ({
  status: 'initial',
}));

const begin = createAction(APPLICATION_EDIT, () => ({
  status: 'pending',
}));

const success = createAction(APPLICATION_EDIT, application => ({
  application,
  status: 'success',
}));

const fail = createAction(APPLICATION_EDIT, error => ({
  status: 'error',
  error,
}));

const edit = (id, fields) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/applications/${id}`,
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
