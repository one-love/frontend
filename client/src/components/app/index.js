import React from 'react';
import ClusterList from '../clusters';
import Header from '../header/index';
import Footer from '../footer/index';

const OneLove = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
  },
  render() {
    return (
      <main className="app">
        <Header/>
        <ClusterList store={this.props.store} />
        <Footer />
      </main>
    );
  },
});


export default OneLove;
