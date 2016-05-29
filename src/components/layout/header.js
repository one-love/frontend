import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <ul className="o-layout o-list-inline header">
      <li><Link to="/clusters/">Clusters</Link></li>
      <li><Link to="/services/">Services</Link></li>
      <li><Link to="/tasks/">Tasks</Link></li>
      <li className="u-fr"><Link to="/logout/">Logout</Link></li>
    </ul>
  );
}

export default Header;
