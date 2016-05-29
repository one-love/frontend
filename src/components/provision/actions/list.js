import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { API_URL } from '../../../backend_url';
import { PROVISION_LIST } from '../constants';

export const reset = createAction(PROVISION_LIST, () => ({ status: 'initial', provisions: [] }));
export const begin = createAction(PROVISION_LIST, () => ({ status: 'pending', provisions: [] }));

export const success = createAction(PROVISION_LIST, provisions => ({
  provisions,
  status: 'success',
}));

export const fail = createAction(PROVISION_LIST, error => ({
  error,
  status: 'error',
}));

export const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/provisions`,
    })
      .then(provisions => {
        dispatch(success(provisions));
        return provisions;
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
