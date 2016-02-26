import React from 'react';
import Header from './Header';
import Footer from './Footer';
import OneLove from '../OneLove';

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  render() {
    const children = this.props.children || <OneLove />;
    return (
      <div>
        <Header />
          {children}
        <Footer />
      </div>
    );
  },
});

export default Layout;
