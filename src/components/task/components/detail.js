import React from 'react';

const Component = React.createClass({
  render() {
    const index = (
      <div>
        hello from task detail
      </div>
    );
    return index;
  },
});

export const Detail = Component;

const routes = {
  indexRoute: { component: Detail },
  path: ':taskId',
};

export default routes;
