import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
