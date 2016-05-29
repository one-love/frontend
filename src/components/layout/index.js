import React from 'react';
import Header from './header';
import Footer from './footer';
import OneLove from '../one-love';

function Layout(props) {
  const children = props.children || <OneLove />;
  return (
    <div>
      <Header />
      <div className="content">
        {children}
      </div>
      <center><Footer /></center>
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
