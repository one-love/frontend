import React from 'react';
import { connect } from 'react-redux';
import { get } from '../actions/cluster/Detail';
import store from '../store';
import { Link } from 'react-router';


const mapStateToProps = (state) => {
  const data = {
    cluster: state.cluster.cluster,
  };
  if (data.cluster !== undefined) {
    data.applications = state.cluster.applications;
    data.roles = state.cluster.roles;
  }
  return data;
};


const Cluster = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object,
    applications: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,

  },

  componentWillMount() {
    store.dispatch(get(this.props.params.clusterId));
  },

  render() {
    const c = this.props.cluster;
    if (c === undefined) {
      return <div></div>;
    }
    return (
      <li className="item">
        <ul className="item__list">
          <li className="item__heading">Name: {c.name}</li>
          <li className="item__child">
            <Link to={`/clusters/${this.props.params.clusterId}/applications/`}>
              Applications
            </Link>
          </li>
          <li className="item__child">
              <b className="item__fragment item__fragment--bold">Roles: </b>
              <span className="item__value">{
                  c.roles.length ?
                  c.roles.map((role) => <span key={role.name}>{role.name} </span>) :
                  'No roles right now'
              }</span>
          </li>
        </ul>
      </li>
    );
  },
});

export default connect(mapStateToProps)(Cluster);

