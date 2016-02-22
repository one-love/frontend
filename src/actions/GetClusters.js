import { createAction } from 'redux-actions';
import { fetch } from '../utils';
import { API_URL } from '../backend_url';
import { CLUSTERS } from '../constants/ActionTypes';

export const gotClusters = createAction(CLUSTERS, clusters => clusters);

export function getClusters() {
  return dispatch => {
    fetch({
      url: `${API_URL}/clusters?page=1&per_page=10`,
      method: 'get',
    })
      .then(clusters => {
        dispatch(gotClusters(clusters));
        return clusters;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const actions = {
  gotClusters,
  getClusters,
};
