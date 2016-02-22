import { createAction } from 'redux-actions';
import { fetch } from '../utils';
import { API_URL } from '../backend_url';
import { CLUSTERS } from '../constants/ActionTypes';

export const gotClusters = createAction(CLUSTERS, clusters => clusters);

export const errorClusters = createAction(CLUSTERS, error => error);

export const getClusters = () =>
  dispatch => {
    fetch({
      url: `${API_URL}/clusters?page=1&per_page=10`,
      method: 'get',
    })
      .then(clusters => {
        dispatch(gotClusters(clusters));
        return clusters;
      })
      .catch(error => {
        dispatch(errorClusters(error.message));
      });
  };

export const actions = {
  gotClusters,
  getClusters,
  errorClusters,
};
