import React from 'react';
import { Link } from 'react-router';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Cluster from './cluster';

export default () => (
  <div>
    <div className="settings">
      <div className="disable">
        <Link to="/settings/disable">x</Link>
      </div>
      <div className="items">
        <Link to="/settings/profile">Profile</Link>
        <Link to="/settings/logout">Logout</Link>
      </div>
    </div>
    <Cluster />
  </div>
);
