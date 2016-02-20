import React from 'react';

const Cluster = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object,
  },
  render() {
    const c = this.props.cluster;
    return (
      <li className="item">
        <ul className="item__list">
          <li className="item__heading">Name: {c.name}</li>
          <li className="item__child">
              <b className="item__fragment item__fragment--bold">Applications: </b>
              <span className="item__value">{
                  c.applications.length ?
                  c.applications.map((app) => <span>{app}</span>) :
                  'No applications right now'
              }</span>
          </li>
          <li className="item__child">
              <b className="item__fragment item__fragment--bold">Roles: </b>
              <span className="item__value">{
                  c.roles.length ?
                  c.applications.map((role) => <span>{role}</span>) :
                  'No roles right now'
              }</span>
          </li>
        </ul>
      </li>
    );
  },
});

export default Cluster;
