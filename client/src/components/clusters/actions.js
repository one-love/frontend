import { createAction, handleActions } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../constants';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CLUSTERS = 'GET_CLUSTERS';

// ------------------------------------
// Actions
// ------------------------------------
export const gotClusters = createAction(GET_CLUSTERS, json => {
  return json;
});

export const getClusters = () => {
  return dispatch => {
    fetch(`${API_URL}/clusters?page=1&per_page=10`)
      .then(json => {
        dispatch(gotClusters(json));
        return json;
      })
      .catch(error => {
        console.log('in catch', error);
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
  GET_CLUSTERS: (state, { payload }) => payload,
}, 1);
