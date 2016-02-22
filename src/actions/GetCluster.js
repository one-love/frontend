import { createAction } from 'redux-actions';
import { fetch } from '../utils';
import { API_URL } from '../backend_url';
import { CLUSTER } from '../constants/ActionTypes';

export const gotCluster = createAction(CLUSTER, cluster => {
  return {
    cluster,
    applications: cluster.applications,
    roles: cluster.roles,
  };
});


export const getCluster = id => {
  return dispatch => {
    fetch({
      url: `${API_URL}/clusters/${id}`,
    })
      .then(json => {
        dispatch(gotCluster(json));
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actions = {
  getCluster,
  gotCluster,
};

