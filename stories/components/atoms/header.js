import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  const myProps = props || {cluster: true};
  return (
    <div>
      <ul className="o-layout o-list-inline header">
        <li className={myProps.cluster ? 'active' : ''}>
          <Link to="/clusters/">Clusters</Link>
        </li>
        <li className={myProps.service ? 'active' : ''}>
          <Link to="/services/">Services</Link>
        </li>
        <li className={myProps.provision ? 'active' : ''}>
          <Link to="/provisions/">Provisions</Link>
        </li>
        <li className="u-fr"><Link to="/logout/">Logout</Link></li>
      </ul>
    </div>
  );
};
