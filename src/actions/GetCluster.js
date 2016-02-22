import { createAction } from 'redux-actions';
import { fetch } from '../utils';
import { API_URL } from '../backend_url';
import { CLUSTER } from '../constants/ActionTypes';

export const gotCluster = createAction(CLUSTER, cluster => ({
  cluster,
  applications: cluster.applications,
  roles: cluster.roles,
}));

export const errorCluster = createAction(CLUSTER, error => error);

export const getCluster = id =>
  dispatch => {
    fetch({
      url: `${API_URL}/clusters/${id}`,
    })
      .then(json => {
        dispatch(gotCluster(json));
        return json;
      })
      .catch(error => {
        dispatch(errorCluster(error.message));
      });
  };


export const actions = {
  getCluster,
  gotCluster,
};

