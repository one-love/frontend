import React from 'react';
import Header from './header';
import Footer from './footer';
import OneLove from '../one-love';

function Layout(props) {
  const children = props.children || <OneLove />;
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
