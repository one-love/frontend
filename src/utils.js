import isomorphicFetch from 'isomorphic-fetch';
import io from 'socket.io-client';
import { SOCKETIO_URL } from './backend_url';
import { socket } from './constants';

export function getAuthToken() {
  return window.localStorage.OneLoveAuthToken;
}


export function isLoggedIn() {
  return Boolean(getAuthToken());
}


export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace('/login/');
  }
}


export function fetch(args) {
  const {
    url,
    body,
    method,
  } = args;
  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `JWT ${getAuthToken()}`,
    },
  };
  if (!isLoggedIn()) {
    delete newargs.headers.Authorization;
  }
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    newargs.headers['Content-Type'] = 'application/json';
  }
  return isomorphicFetch(url, newargs)
    .then(response => {
      const json = response.json();
      if (response.status >= 400) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return json;
    });
}


export function socketio() {
  if (socket.io) { return socket.io; }
  if (window.localStorage.OneLoveAuthToken) {
    socket.io = io(
      SOCKETIO_URL,
      {
        transports: ['websocket'],
        query: `token=${window.localStorage.OneLoveAuthToken}`,
      },
    );
  }
  return socket.io;
}
