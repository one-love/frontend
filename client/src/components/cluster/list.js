import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getClusters } from './actions/list';
import store from '../../store';


const mapStateToProps = (state) => {
  return {
    clusters: state.clusters,
  };
};

const ClusterList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
  },
  componentWillMount() {
    store.dispatch(getClusters());
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
                to={'/clusters/' + cluster.id + '/'}
                cluster={cluster}
              > {cluster.name} </Link> </li>
            )
          }
        </ul>
      </div>
    );
  },
});

export default connect(mapStateToProps)(ClusterList);
