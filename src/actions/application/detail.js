import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { APPLICATION } from '../../constants/ActionTypes';

export const begin = createAction(APPLICATION, () => ({ status: 'pending' }));

export const success = createAction(APPLICATION, applications => ({
  applications,
  applications: applications.applications,
  roles: applications.roles,
}));

export const fail = createAction(APPLICATION, error => error);

export const get = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/applicationss/${id}`,
    })
      .then(json => {
        dispatch(success(json));
        return json;
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

