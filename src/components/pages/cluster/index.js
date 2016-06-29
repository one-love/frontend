import React from 'react';
import cssModules from 'react-css-modules';
import styles from './cluster.scss';
import actions from './actions';
import { connect } from 'react-redux';
import store from '../../../store';

const mapStateToProps = (state) => ({
  cluster: state.clusterDetail.cluster,
  roles: state.clusterDetail.roles,
});


const ClusterDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    cluster: React.PropTypes.object,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.clusterId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.cluster === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <h2>{this.props.cluster.name}</h2>
        <div>
          <div styleName="label">
            username:
          </div>
          <div styleName="item">
            admin@example.com
          </div>
        </div>
        <div>
          <div styleName="label">
            ssh key:
          </div>
          <div styleName="item">
            tandara mandara
          </div>
        </div>
        <div>
          <div styleName="label">
            providers:
          </div>
          <div styleName="item">
            <select>
              <option value="cluster name">cicvara popara</option>
              <option value="something">gurabija</option>
            </select>
          </div>
        </div>
        <div>
          <div styleName="label">
            roles:
          </div>
          <div styleName="item">
            <select>
              <option value="some">op čop</option>
              <option value="thing">antilop</option>
            </select>
          </div>
        </div>
        <div>
          <div styleName="label">
            services:
          </div>
          <div styleName="item">
            <select>
              <option value="some">bandaranaik</option>
              <option value="thing">trokraka udica</option>
            </select>
          </div>
        </div>
      </div>
    );
  },
});


const routes = {
  path: ':clusterId',
  indexRoute: { component: connect(mapStateToProps, actions)(cssModules(ClusterDetail, styles)) },
};

export default routes;
