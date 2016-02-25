import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <div>
        <Link to="/logout/">Go to Logout</Link>
      </div>
    );
  },
});

export default Header;
