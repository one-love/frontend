import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { PROVISION_DETAIL } from '../constants';


const reset = createAction(PROVISION_DETAIL, () => ({ status: 'initial' }));

const begin = createAction(PROVISION_DETAIL, () => ({ status: 'pending' }));

const success = createAction(PROVISION_DETAIL, provision => ({
  status: 'success',
  provision,
}));

const successProvision = createAction(PROVISION_DETAIL, provision => ({
  status: 'success',
  provision: {
    ...provision,
    status: 'SUCCESS',
  },
}));

const fail = createAction(PROVISION_DETAIL, error => ({
  status: 'error',
  error,
}));

const failProvision = createAction(PROVISION_DETAIL, (provision, error) => ({
  status: 'error',
  error,
  provision: {
    ...provision,
    status: 'FAILED',
  },
}));

const get = id =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/provisions/${id}`,
    })
      .then(provision => {
        dispatch(success(provision));
        return provision;
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
  failProvision,
  successProvision,
  get,
};

export default actions;
