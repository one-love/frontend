import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { APPLICATION_REMOVE } from '../constants';

export const reset = createAction(APPLICATION_REMOVE, () => ({
  status: 'initial',
}));

export const begin = createAction(APPLICATION_REMOVE, () => ({
  status: 'pending',
}));

export const success = createAction(APPLICATION_REMOVE, application => ({
  application,
  status: 'success',
}));

export const fail = createAction(APPLICATION_REMOVE, error => ({
  status: 'error',
  error,
}));

export const remove = (clusterId, applicationName) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${clusterId}/applications/${applicationName}`,
      method: 'delete',
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
  remove,
};

export default actions;
