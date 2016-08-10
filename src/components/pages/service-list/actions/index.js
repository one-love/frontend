import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { SERVICE_LIST } from '../constants';


const reset = createAction(SERVICE_LIST, () => ({
  status: 'initial',
  services: [],
}));

const begin = createAction(SERVICE_LIST, () => ({
  status: 'pending',
  services: [],
}));

const success = createAction(SERVICE_LIST, services => ({
  services,
  status: 'success',
}));

const fail = createAction(SERVICE_LIST, error => ({
  status: 'error',
  error,
}));

const get = () =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/services`,
      method: 'GET',
    })
      .then(services => {
        dispatch(success(services));
        return services;
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
