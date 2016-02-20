import React from 'react';
import ClusterList from '../clusters';

const OneLove = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
  },
  render() {
    return (
      <main className="app">
        <ClusterList store={this.props.store} />
      </main>
    );
  },
});


export default OneLove;
