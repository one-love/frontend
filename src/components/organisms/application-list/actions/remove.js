import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { APPLICATION_REMOVE } from '../constants';


export const reset = createAction(APPLICATION_REMOVE, () => ({ status: 'initial' }));
export const begin = createAction(APPLICATION_REMOVE, () => ({ status: 'pending' }));

export const success = createAction(APPLICATION_REMOVE, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_REMOVE, error => ({
  status: 'error',
  error,
}));


export const confirm = createAction(APPLICATION_REMOVE, id => ({
  status: 'confirm',
  application: {
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
  remove,
  confirm,
};

export default actions;
