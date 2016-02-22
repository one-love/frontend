import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { get, actions } from '../actions/cluster/List';
import store from '../store';


const mapStateToProps = state => ({
  clusters: state.clusters.clusters,
  status: state.clusters.status,
});

const ClusterList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(get());
  },

  render() {
    return (
      <div>
        <h2>My clusters:</h2>
        <ul>
          {
            this.props.clusters.map(
              cluster =>
              <li key={cluster.id}>
              <Link
                key={cluster.id}
                to={`/clusters/${cluster.id}/`}
                cluster={cluster}
              > {cluster.name} </Link> </li>
            )
          }
        </ul>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(ClusterList);

