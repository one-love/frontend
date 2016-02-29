import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';
import create from './create';
import detail from './detail';


const mapStateToProps = state => ({
  clusters: state.clusterList.clusters,
  status: state.clusterList.status,
});

const Component = React.createClass({
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

export const List = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'clusters',
  indexRoute: { component: List },
  childRoutes: [
    create,
    detail,
  ],
};

export default routes;
