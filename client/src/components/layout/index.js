import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  },
});

export default Layout;
