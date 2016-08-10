import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { PROVISION_LIST } from './constants';


const reset = createAction(PROVISION_LIST, () => ({
  status: 'initial', provisions: [],
}));

const begin = createAction(PROVISION_LIST, () => ({
  status: 'pending', provisions: [],
}));

const success = createAction(PROVISION_LIST, provisions => ({
  provisions,
  status: 'success',
}));

const fail = createAction(PROVISION_LIST, error => ({
  error,
  status: 'error',
}));

const get = () =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/provisions`,
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
