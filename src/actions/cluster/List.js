import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { CLUSTERS } from '../../constants/ActionTypes';

export const begin = createAction(CLUSTERS, () => ({
  status: 'pending',
  clusters: [],
}));

export const success = createAction(CLUSTERS, clusters => ({
  clusters,
  status: 'success',
}));

export const fail = createAction(CLUSTERS, error => ({
  status: 'error',
  error,
}));

export const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters`,
      method: 'get',
    })
      .then(clusters => {
        dispatch(success(clusters));
        return clusters;
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
