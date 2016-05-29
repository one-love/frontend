import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { PROVISION } from '../constants';

export const reset = createAction(PROVISION, () => ({
  status: 'initial',
}));

export const begin = createAction(PROVISION, () => ({
  status: 'pending',
}));

export const success = createAction(PROVISION, provision => ({
  provision,
  status: 'success',
}));

export const fail = createAction(PROVISION, error => ({
  status: 'error',
  error,
}));

export const provisionService = (clusterId, id) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/services/${id}/provision`,
      method: 'GET',
    })
      .then(provision => {
        dispatch(success(provision));
        return provision;
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
  provisionService,
};

export default actions;
