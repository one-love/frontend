import List from './List';
import create from './Create';
import detail from './Detail';

const routes = {
  path: 'clusters',
  component: List,
  childRoutes: [
    detail,
    create,
  ],
};

export default routes;
