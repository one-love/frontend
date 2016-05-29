import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { TASK_LIST } from '../constants';

export const reset = createAction(TASK_LIST, () => ({ status: 'initial', tasks: [] }));
export const begin = createAction(TASK_LIST, () => ({ status: 'pending', tasks: [] }));

export const success = createAction(TASK_LIST, tasks => ({
  tasks,
  status: 'success',
}));

export const fail = createAction(TASK_LIST, error => ({
  error,
  status: 'error',
}));

export const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/tasks`,
    })
      .then(tasks => {
        dispatch(success(tasks));
        return tasks;
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
