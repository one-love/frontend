import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { CLUSTER_REMOVE } from '../../constants/ActionTypes';

export const reset = createAction(CLUSTER_REMOVE, () => ({
  status: 'initial',
}));

export const begin = createAction(CLUSTER_REMOVE, () => ({
  status: 'pending',
}));

export const success = createAction(CLUSTER_REMOVE, cluster => ({
  cluster,
  status: 'success',
}));

export const fail = createAction(CLUSTER_REMOVE, error => ({
  status: 'error',
  error,
}));

export const remove = (id) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${id}`,
      method: 'delete',
    })
      .then(cluster => {
        dispatch(success(cluster));
        return cluster;
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
};

export default actions;
