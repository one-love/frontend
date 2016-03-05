import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { APPLICATION_PROVISION } from '../constants';

export const reset = createAction(APPLICATION_PROVISION, () => ({ status: 'initial' }));
export const begin = createAction(APPLICATION_PROVISION, () => ({ status: 'pending' }));

export const success = createAction(APPLICATION_PROVISION, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_PROVISION, error => ({
  status: 'error',
  error,
}));

export const provision = (clusterId, applicationName) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/applications/${applicationName}/provision`,
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
  provision,
};

export default actions;
