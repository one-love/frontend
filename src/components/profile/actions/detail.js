import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { ME_DETAIL } from '../constants';

export const reset = createAction(ME_DETAIL, () => ({ status: 'initial' }));
export const begin = createAction(ME_DETAIL, () => ({ status: 'pending' }));

export const success = createAction(ME_DETAIL, me => ({
  me,
}));

export const fail = createAction(ME_DETAIL, error => ({
  status: 'error',
  error,
}));

export const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/me`,
    })
      .then(me => {
        dispatch(success(me));
        return me;
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
