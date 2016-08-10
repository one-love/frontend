import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { CLUSTER_SERVICE_REMOVE } from '../constants';


const reset = createAction(CLUSTER_SERVICE_REMOVE, () => ({
  status: 'initial',
}));

const begin = createAction(CLUSTER_SERVICE_REMOVE, () => ({
  status: 'pending',
}));

const success = createAction(CLUSTER_SERVICE_REMOVE, service => ({
  service,
  status: 'success',
}));

const fail = createAction(CLUSTER_SERVICE_REMOVE, error => ({
  status: 'error',
  error,
}));

const confirm = createAction(CLUSTER_SERVICE_REMOVE, id => ({
  status: 'confirm',
  service: {
    id,
  },
}));


const remove = id =>
  (dispatch, getState) => {
    dispatch(begin());
    const apiUrl = getState().backend.apiUrl;
    fetch({
      url: `${apiUrl}/${id}`,
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
