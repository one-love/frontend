import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Service from '../molecules/service';
import styles from './service-list.scss';


function ServiceList() {
  return (
    <div>
      <Header service="active"/>
      <div styleName="service-list">
        <h1>Services</h1>
        <Service name="One Love" />
        <Service name="Liberator" />
        <Service name="Compose" />
      </div>
      <Footer />
    </div>
  );
}


export default CSSModules(ServiceList, styles);
