import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { CLUSTER_CREATE } from '../constants';

export const reset = createAction(CLUSTER_CREATE, () => ({
  status: 'initial',
}));

export const begin = createAction(CLUSTER_CREATE, () => ({
  status: 'pending',
}));

export const success = createAction(CLUSTER_CREATE, cluster => ({
  cluster,
  status: 'success',
}));

export const fail = createAction(CLUSTER_CREATE, error => ({
  status: 'error',
  error,
}));

export const create = (name, sshKey, username) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters`,
      method: 'POST',
      body: {
        name,
        sshKey,
        username,
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
  create,
};

export default actions;
