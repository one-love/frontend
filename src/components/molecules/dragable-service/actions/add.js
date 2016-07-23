import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { ADD_SERVICE } from '../constants';

export const reset = createAction(ADD_SERVICE, () => ({
  status: 'initial',
}));

export const begin = createAction(ADD_SERVICE, () => ({
  status: 'pending',
}));

export const success = createAction(ADD_SERVICE, service => ({
  service,
  status: 'success',
}));

export const fail = createAction(ADD_SERVICE, error => ({
  status: 'error',
  error,
}));

export const add = (clusterId, itemId) =>
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
