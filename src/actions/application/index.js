import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { PROVIDER_DETAIL } from '../../constants/ActionTypes';

export const reset = createAction(PROVIDER_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(PROVIDER_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(PROVIDER_DETAIL, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(PROVIDER_DETAIL, error => error);

export const get = (clusterId, applicationName) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/applications/${applicationName}`,
    })
      .then(application => {
        dispatch(success(application));
        return application;
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
