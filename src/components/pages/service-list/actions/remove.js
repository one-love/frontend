import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { SERVICE_REMOVE } from '../constants';


const reset = createAction(SERVICE_REMOVE, () => ({
  status: 'initial',
}));

const begin = createAction(SERVICE_REMOVE, () => ({
  status: 'pending',
}));

const success = createAction(SERVICE_REMOVE, service => ({
  service,
  status: 'success',
}));

const fail = createAction(SERVICE_REMOVE, error => ({
  status: 'error',
  error,
}));

const confirm = createAction(SERVICE_REMOVE, id => ({
  status: 'confirm',
  service: {
    id,
  },
}));


const remove = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/services/${id}`,
      method: 'DELETE',
      body: {
        id,
      },
    })
      .then(service => {
        dispatch(success(service));
        return service;
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
  confirm,
  remove,
};

export default actions;
