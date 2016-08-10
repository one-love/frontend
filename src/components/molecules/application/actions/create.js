import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { APPLICATION_CREATE } from '../constants';


const reset = createAction(APPLICATION_CREATE, () => ({
  status: 'initial',
}));

const begin = createAction(APPLICATION_CREATE, () => ({
  status: 'pending',
}));

const success = createAction(APPLICATION_CREATE, application => ({
  application,
  status: 'success',
}));

const fail = createAction(APPLICATION_CREATE, error => ({
  status: 'error',
  error,
}));


const create = (serviceId, name, galaxyRole) =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/services/${serviceId}/applications`,
      method: 'POST',
      body: {
        name,
        galaxy_role: galaxyRole,
      },
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
  create,
};


export default actions;
