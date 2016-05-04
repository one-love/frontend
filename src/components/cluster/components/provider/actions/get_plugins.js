import { createAction } from 'redux-actions';
import { fetch } from '../../../../../utils';
import { API_URL } from '../../../../../backend_url';
import { GET_PLUGINS } from '../constants';

export const reset = createAction(GET_PLUGINS, () => ({
  status: 'initial',
  plugins: [],
}));

export const begin = createAction(GET_PLUGINS, () => ({
  status: 'pending',
  plugins: [],
}));

export const success = createAction(GET_PLUGINS, plugins => ({
  plugins,
  status: 'success',
}));

export const fail = createAction(GET_PLUGINS, error => ({
  status: 'error',
  error,
}));

export const get = () =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/plugins/providers`,
      method: 'GET',
    })
      .then(plugins => {
        dispatch(success(plugins));
        return plugins;
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
