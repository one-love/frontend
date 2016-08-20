import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { APPLICATION_REMOVE } from '../constants';


const reset = createAction(APPLICATION_REMOVE, () => ({ status: 'initial' }));
const begin = createAction(APPLICATION_REMOVE, () => ({ status: 'pending' }));

const success = createAction(APPLICATION_REMOVE, application => ({
  application,
  status: 'success',
}));

const fail = createAction(APPLICATION_REMOVE, error => ({
  status: 'error',
  error,
}));


const confirm = createAction(APPLICATION_REMOVE, id => ({
  status: 'confirm',
  application: {
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
