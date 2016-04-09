import React from 'react';
import detail from './components/detail';

const Component = React.createClass({
  render() {
    const index = (
      <div>
        Hello from tasks
      </div>
    );
    return index;
  },
});

export const List = Component;

const router = {
  indexRoute: { component: List },
  path: '/tasks/',
  childRoutes: [
    detail,
  ],
};

export default router;
