import React from 'react';
import cssModules from 'react-css-modules';
import Header from '../../molecules/header';
import Footer from '../../atoms/footer';
import Landing from '../../pages/landing';
import styles from './layout.scss';


function Layout(props) {
  const content = props.children ? props.children : <Landing />;
  return (
    <div>
      <Header />
      <div styleName="content">
        {content}
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
