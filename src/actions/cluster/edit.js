import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { CLUSTER_EDIT } from '../../constants/ActionTypes';

export const reset = createAction(CLUSTER_EDIT, () => ({
  status: 'initial',
}));

export const begin = createAction(CLUSTER_EDIT, () => ({
  status: 'pending',
}));

export const success = createAction(CLUSTER_EDIT, cluster => ({
  cluster,
  status: 'success',
}));

export const fail = createAction(CLUSTER_EDIT, error => ({
  status: 'error',
  error,
}));

export const edit = (id, name) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${id}`,
      method: 'put',
      body: {
        name,
      },
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
  edit,
};

export default actions;
