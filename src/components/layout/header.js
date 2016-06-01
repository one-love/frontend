import React from 'react';
import { Link } from 'react-router';


const Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <ul className="o-layout o-list-inline header">
        <li className=
          {this.context.router.isActive('clusters') ? 'active' : ''}
        >
          <Link to="/clusters/">Clusters</Link>
        </li>
        <li className=
          {this.context.router.isActive('services') ? 'active' : ''}
        >
          <Link to="/services/">Services</Link>
        </li>
        <li className=
          {this.context.router.isActive('provisions') ? 'active' : ''}
        >
          <Link to="/provisions/">Provisions</Link>
        </li>
        <li className=
          {this.context.router.isActive('logout') ? 'u-fr active' : 'u-fr'}
        >
          <Link to="/logout/">Logout</Link>
        </li>
      </ul>
    );
  },
});

export default Header;
