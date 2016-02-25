import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { APPLICATION_DETAIL } from '../../constants/ActionTypes';

export const reset = createAction(APPLICATION_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(APPLICATION_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(APPLICATION_DETAIL, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_DETAIL, error => error);

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
