import { hashHistory } from 'react-router';
import io from 'socket.io-client';
import { SOCKETIO_URL } from './backend_url';

export const history = hashHistory;
export const postLogoutURL = '/login/';

export const socketio = io(SOCKETIO_URL, { transports: ['websocket'] });
