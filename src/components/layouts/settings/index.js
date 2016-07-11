import React from 'react';
import cssModules from 'react-css-modules';
import Header from '../../molecules/header';
import Footer from '../../atoms/footer';
import Popup from '../../atoms/popup';
import styles from './settings.scss';


function Settings(props) {
  return (
    <div>
      <Popup className="popup">
        Settings
      </Popup>
      <Header
        cluster={props.cluster}
        service={props.service}
        provision={props.provision}
      />
      <div styleName="content">
        <h1>{props.title ? props.title : 'Title'}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


Settings.propTypes = {
  cluster: React.PropTypes.string,
  children: React.PropTypes.node,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};


export default cssModules(Settings, styles);
