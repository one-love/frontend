import Logout from './logout';

const routes = {
  path: 'logout',
  getComponent: (location, callback) => {
    callback(null, Logout);
  },
};

export default routes;
