import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Service from '../molecules/service';
import '../style.scss';

export default () => (
  <div>
    <Header service="active"/>
    <div className="content">
      <h1>Services</h1>
      <Service name="One Love" />
      <Service name="Liberator" />
      <Service name="Compose" />
    </div>
    <Footer />
  </div>
);
