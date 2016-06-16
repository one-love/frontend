import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import styles from './profile.scss';


function Profile() {
  return (
    <div>
      <Header />
      <div styleName="profile">
        <div>username: admin </div>
        <div>email: admin@example.com</div>
        <div>first name: Bluc </div>
        <div>last name: Truc</div>
      </div>
      <Footer />
    </div>
  );
}


export default CSSModules(Profile, styles);
