import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { PROVIDER_LIST } from '../../constants/ActionTypes';

export const reset = createAction(PROVIDER_LIST, () => ({
  status: 'initial',
  applications: [],
}));

export const begin = createAction(PROVIDER_LIST, () => ({
  status: 'pending',
  applications: [],
}));

export const success = createAction(PROVIDER_LIST, applications => ({
  applications,
  status: 'success',
}));

export const fail = createAction(PROVIDER_LIST, error => ({
  status: 'error',
  error,
}));

export const get = clusterId =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/applications`,
      method: 'get',
    })
      .then(applications => {
        dispatch(success(applications));
        return applications;
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
  get,
};

export default actions;
