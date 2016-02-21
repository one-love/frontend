import { createAction, handleActions } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CLUSTERS = 'GET_CLUSTERS';
export const GET_CLUSTERS_ERROR = 'GET_CLUSTERS_ERROR';

// ------------------------------------
// Actions
// ------------------------------------
export const gotClusters = createAction(GET_CLUSTERS, clusters => {
  return clusters;
});


export const errorClusters = createAction(GET_CLUSTERS_ERROR, error => {
  return error.message;
});

export const getClusters = () => {
  return dispatch => {
    fetch({
      url: `${API_URL}/clusters?page=1&per_page=10`,
      method: 'get',
    })
      .then(json => {
        dispatch(gotClusters(json));
        return json;
      })
      .catch(error => {
        dispatch(errorClusters(error));
      });
  };
};


export const actions = {
  getClusters,
  gotClusters,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  GET_CLUSTERS: (state, { payload }) => {
    return payload;
  },
  GET_CLUSTERS_ERROR: (state, { payload }) => {
    return payload;
  },
}, []);
