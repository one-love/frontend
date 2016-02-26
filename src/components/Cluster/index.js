import list from './List';
import detail from './Detail';

const routes = {
  path: 'clusters',
  childRoutes: [
    list,
    detail,
  ],
};

export default routes;
