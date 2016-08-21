import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { HOST_REMOVE } from '../constants';

const reset = createAction(HOST_REMOVE, () => ({ status: 'initial' }));
const begin = createAction(HOST_REMOVE, () => ({ status: 'pending' }));

const success = createAction(HOST_REMOVE, host => ({
  host,
  status: 'success',
}));

const fail = createAction(HOST_REMOVE, error => ({
  status: 'error',
  error,
}));


const confirm = createAction(HOST_REMOVE, id => ({
  status: 'confirm',
  host: { id },
}));


const remove = id =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/${id}`,
      method: 'DELETE',
    })
      .then(host => {
        dispatch(success(host));
        return host;
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
