import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { TASK_DETAIL } from '../constants';

export const reset = createAction(TASK_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(TASK_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(TASK_DETAIL, task => ({
  task,
  status: 'success',
}));

export const fail = createAction(TASK_DETAIL, error => ({
  error,
  status: 'error',
}));

export const get = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/tasks/${id}`,
    })
      .then(task => {
        dispatch(success(task));
        return task;
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
  get,
};

export default actions;
