import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <ul className="o-list-inline  header o-list-inline--delimited">
      <li><Link to="/clusters/">Clusters</Link></li>
      <li><Link to="/services/">Services</Link></li>
      <li><Link to="/tasks/">Tasks</Link></li>
      <li><Link to="/logout/">Log Out</Link></li>
    </ul>
  );
}

export default Header;
