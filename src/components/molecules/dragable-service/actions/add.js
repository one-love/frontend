import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { CLUSTER_SERVICE_ADD } from '../constants';

const reset = createAction(CLUSTER_SERVICE_ADD, () => ({
  status: 'initial',
}));

const begin = createAction(CLUSTER_SERVICE_ADD, () => ({
  status: 'pending',
}));

const success = createAction(CLUSTER_SERVICE_ADD, service => ({
  service,
  status: 'success',
}));

const fail = createAction(CLUSTER_SERVICE_ADD, error => ({
  status: 'error',
  error,
}));

const add = (clusterId, itemId) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/services`,
      method: 'POST',
      body: {
        service_id: itemId,
      },
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
  add,
};

export default actions;
