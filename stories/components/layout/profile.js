import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';


export default () => (
  <div>
    <Header />
    <div className="content">
      <div>username: admin </div>
      <div>email: admin@example.com</div>
      <div>first name: Bluc </div>
      <div>last name: Truc</div>
    </div>
    <Footer />
  </div>
)
