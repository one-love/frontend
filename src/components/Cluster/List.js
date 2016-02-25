import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';


const mapStateToProps = state => ({
  clusters: state.clusterList.clusters,
  status: state.clusterList.status,
});

const ClusterList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
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
        <Link to={'/clusters/create/'}>Create</Link>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(ClusterList);

