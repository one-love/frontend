import { hashHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export const history = hashHistory;
export const postLogoutURL = '/login/';
export const socket = {};


export const errors = {
  login: {
    UNAUTHORIZED: 'Unable to log you in. Wrong email or password',
  },
};


export const themes = {
  light: getMuiTheme({
    name: 'light',

    footer: {
      height: 25,
      textAlign: 'center',
      color: '#bbb',
      fontFamily: 'Roboto, sans-serif',
      boxShadow: '0px -1px 3px #eee',
      a: {
        color: 'gray',
      },
    },

    breadcrumbs: {
      height: 25,
      backgroundColor: 'rgba(166, 234, 255, 0.20)',
    },

    inactive: {
      color: 'gray',
    },

    content: {
      padding: 10,
    },
  }),
};
