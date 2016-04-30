import { createAction } from 'redux-actions';
import io from 'socket.io-client';
import { fetch } from '../../utils';
import { API_URL } from '../../backend_url';
import { LOGIN } from './constants';
import { SOCKETIO_URL } from '../../backend_url';
import { socket } from '../../constants';


export const reset = createAction(LOGIN, () => ({
  status: 'initial',
}));

export const begin = createAction(LOGIN, () => ({
  status: 'pending',
}));

export const success = createAction(LOGIN, json => {
  window.localStorage.OneLoveAuthToken = json.token;
  socket.io = io(
    SOCKETIO_URL,
    {
      transports: ['websocket'],
      query: `token=${json.token}`,
    },
  );
  return {
    token: json.token,
    status: 'success',
  };
});

export const fail = createAction(LOGIN, error => ({
  error: error.message,
  status: 'error',
}));

export const login = (email, password) =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/auth/tokens`,
      body: {
        email,
        password,
      },
      contentType: 'application/json',
      method: 'post',
    })
      .then(token => {
        dispatch(success(token));
        return token;
      })
      .catch(error => {
        dispatch(fail(error));
      });
  };

const actions = {
  begin,
  success,
  fail,
  login,
};

export default actions;
