import React from 'react';
import { Link } from 'react-router';
import gear from '../../../media/img/gear.svg';

export default (props) => {
  const myProps = props || {cluster: true};
  return (
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
      <li className="u-fr">
        <div>
          <img src={gear} />
        </div>
      </li>
    </ul>
  );
};
