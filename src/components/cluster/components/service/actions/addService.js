/* eslint camelcase: 0 */

import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { CLUSTER_SERVICE } from '../constants';

export const reset = createAction(CLUSTER_SERVICE, () => ({
  status: 'initial',
}));

export const begin = createAction(CLUSTER_SERVICE, () => ({
  status: 'pending',
}));

export const success_get = createAction(CLUSTER_SERVICE, services => ({
  services,
  status: 'success_get',
}));

export const success_add = createAction(CLUSTER_SERVICE, service => ({
  service,
  status: 'success_add',
}));

export const fail = createAction(CLUSTER_SERVICE, error => ({
  status: 'error',
  error,
}));

export const add = (clusterId, service) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/services`,
      method: 'post',
      body: {
        service,
      },
    })
      .then(srvc => {
        dispatch(success_add(srvc));
        return srvc;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

export const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services`,
      method: 'get',
    })
      .then(services => {
        dispatch(success_get(services));
        return services;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };


const actions = {
  reset,
  begin,
  success_get,
  success_add,
  fail,
  add,
  get,
};

export default actions;
