import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <h2>Host: Tilda Center</h2>
      <h2>IP:  127.0.0.1</h2>
      <Link to='/#/'>
        Edit
      </Link>
      <Link to='/#/'>
        Remove
      </Link>
    </div>
  );
}
