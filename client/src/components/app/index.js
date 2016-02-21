import React from 'react';
import { Link } from 'react-router';

const OneLove = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
  },
  render() {
    return (
      <main className="app">
        <Link to="/clusters/" > clusters </Link>
      </main>
    );
  },
});


export default OneLove;
