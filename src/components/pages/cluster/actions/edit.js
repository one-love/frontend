import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { CLUSTER_EDIT } from '../constants';
import { get } from './detail';

const reset = createAction(CLUSTER_EDIT, () => ({
  status: 'initial',
}));

const begin = createAction(CLUSTER_EDIT, () => ({
  status: 'pending',
}));

const success = createAction(CLUSTER_EDIT, cluster => ({
  cluster,
  status: 'success',
}));

const fail = createAction(CLUSTER_EDIT, error => ({
  status: 'error',
  error,
}));

const edit = (id, fields) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/clusters/${id}`,
      method: 'PATCH',
      body: fields,
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
  get,
};

export default actions;
