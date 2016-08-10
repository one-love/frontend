import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { CLUSTER_CREATE } from '../constants';


const reset = createAction(CLUSTER_CREATE, () => ({
  status: 'initial',
}));

const begin = createAction(CLUSTER_CREATE, () => ({
  status: 'pending',
}));

const success = createAction(CLUSTER_CREATE, cluster => ({
  cluster,
  status: 'success',
}));

const fail = createAction(CLUSTER_CREATE, error => ({
  status: 'error',
  error,
}));


const create = (name, sshKey, username) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters`,
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
