import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { APPLICATION_LIST } from '../constants';


const reset = createAction(APPLICATION_LIST, () => ({
  status: 'initial',
  applications: [],
}));

const begin = createAction(APPLICATION_LIST, () => ({
  status: 'pending',
  applications: [],
}));

const success = createAction(APPLICATION_LIST, applications => ({
  applications,
  status: 'success',
}));

const fail = createAction(APPLICATION_LIST, error => ({
  status: 'error',
  error,
}));

const get = serviceId =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/services/${serviceId}/applications`,
      method: 'GET',
    })
      .then(applications => {
        dispatch(success(applications));
        return applications;
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
