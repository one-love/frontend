import React from 'react';
import Header from './header';
import Footer from './footer';
import OneLove from '../one-love';

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
