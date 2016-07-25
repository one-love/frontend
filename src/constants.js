import { hashHistory } from 'react-router';


export const history = hashHistory;
export const postLogoutURL = '/login/';
export const socket = {};

export const errors = {
  login: {
    UNAUTHORIZED: 'Unable to log you in. Wrong email or password',
  },
};
