import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { CLUSTER } from '../../constants/ActionTypes';

export const begin = createAction(CLUSTER, () => ({ status: 'pending' }));

export const success = createAction(CLUSTER, cluster => ({
  cluster,
  applications: cluster.applications,
  roles: cluster.roles,
}));

export const fail = createAction(CLUSTER, error => error);

export const get = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${id}`,
    })
      .then(json => {
        dispatch(success(json));
        return json;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

export const actions = {
  begin,
  success,
  fail,
  get,
};

