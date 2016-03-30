import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { GET_ME } from './constants';

export const success = createAction(GET_ME, me => {
  window.localStorage.email = me.email;
  return {
    email: me.email,
    status: 'success',
  };
});

export const fail = createAction(GET_ME, error => ({
  error: error.message,
  status: 'error',
}));

export const get = () =>
  dispatch => {
    fetch({
      url: `${API_URL}/me`,
      method: 'get',
    })
      .then(me => {
        dispatch(success(me));
        return me;
      })
      .cacth(error => {
        dispatch(fail(error));
      });
  };

const actions = {
  success,
  fail,
  get,
};

export default actions;
