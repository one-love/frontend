import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { CLUSTER_REMOVE } from '../constants';

const reset = createAction(CLUSTER_REMOVE, () => ({
  status: 'initial',
}));

const begin = createAction(CLUSTER_REMOVE, () => ({
  status: 'pending',
}));

const success = createAction(CLUSTER_REMOVE, cluster => ({
  cluster,
  status: 'success',
}));

const fail = createAction(CLUSTER_REMOVE, error => ({
  status: 'error',
  error,
}));

const confirm = createAction(CLUSTER_REMOVE, id => ({
  status: 'confirm',
  cluster: { id },
}));

const remove = id =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${id}`,
      method: 'DELETE',
      body: {
        id,
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
  confirm,
  remove,
};

export default actions;
