import React from 'react';
import Header from '../atoms/header';
import Footer from '../atoms/footer';
import Service from '../atoms/service-icon';
import '../style.scss';

export default () => (
  <div>
    <Header service="true"/>
    <div className="content">
      <h1>Services</h1>
      <Service name="One Love" />
      <Service name="Liberator" />
      <Service name="Compose" />
    </div>
    <Footer />
  </div>
);
