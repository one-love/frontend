import React from 'react';
import cssModules from 'react-css-modules';
import Header from '../../molecules/header';
import Footer from '../../atoms/footer';
import Sidebar from '../../atoms/sidebar';
import styles from './layout.scss';


function Layout(props) {
  return (
    <div>
      <Sidebar className="sidebar" />
      <Header />
      <div styleName="content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


Layout.propTypes = {
  cluster: React.PropTypes.string,
  children: React.PropTypes.node,
  service: React.PropTypes.string,
  popup: React.PropTypes.node,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};


export default cssModules(Layout, styles);
