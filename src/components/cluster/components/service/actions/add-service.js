/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { CLUSTER_SERVICE_ADD } from '../constants';
import get_services from '../../../../service/actions/list';

export const reset = createAction(CLUSTER_SERVICE_ADD, () => ({
  status: 'initial',
}));

export const begin = createAction(CLUSTER_SERVICE_ADD, () => ({
  status: 'pending',
}));

export const success = createAction(CLUSTER_SERVICE_ADD, service => ({
  service,
  status: 'success',
}));

export const fail = createAction(CLUSTER_SERVICE_ADD, error => ({
  status: 'error',
  error,
}));

export const add = (clusterId, service_id) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/services`,
      method: 'POST',
      body: {
        service_id,
      },
    })
      .then(srvc => {
        dispatch(success(srvc));
        return srvc;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

export const get = get_services.get;

const actions = {
  reset,
  begin,
  success,
  fail,
  add,
  get,
};

export default actions;
