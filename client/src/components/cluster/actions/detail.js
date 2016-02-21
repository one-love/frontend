import { createAction, handleActions } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CLUSTER = 'GET_CLUSTER';
export const GET_CLUSTER_ERROR = 'GET_CLUSTER_ERROR';

// ------------------------------------
// Actions
// ------------------------------------
export const gotCluster = createAction(GET_CLUSTER, cluster => {
  return {
    cluster,
    applications: cluster.applications,
    roles: cluster.roles,
  };
});


export const errorCluster = createAction(GET_CLUSTER_ERROR, error => {
  return error.message;
});


export const getCluster = id => {
  return dispatch => {
    fetch({
      url: API_URL + '/clusters/' + id,
      method: 'get',
    })
      .then(json => {
        dispatch(gotCluster(json));
        return json;
      })
      .catch(error => {
        dispatch(errorCluster(error));
      });
  };
};

export const actions = {
  getCluster,
  gotCluster,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  GET_CLUSTER: (state, { payload }) => {
    return payload;
  },
  GET_CLUSTER_ERROR: (state, { payload }) => {
    return payload;
  },
}, {});
