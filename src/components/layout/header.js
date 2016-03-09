import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <div>
      <Link to="/logout/">Go to Logout</Link>
    </div>
  );
}

export default Header;
