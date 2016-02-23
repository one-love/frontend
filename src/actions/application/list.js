import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { APPLICATIONS } from '../../constants/ActionTypes';

export const begin = createAction(APPLICATIONS, () => ({
  status: 'pending',
  applications: [],
}));

export const success = createAction(APPLICATIONS, applications => ({
  applications,
  status: 'success',
}));

export const fail = createAction(APPLICATIONS, error => ({
  status: 'error',
  error,
}));

export const get = (id) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${id}/applications`,
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

export const actions = {
  begin,
  success,
  fail,
  get,
};
