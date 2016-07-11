import React from 'react';
import cssModules from 'react-css-modules';
import styles from './host.scss';
import actions from './actions/detail';
import editActions from './actions/edit';
import { connect } from 'react-redux';
import store from '../../../store';


const mapStateToProps = (state) => ({
  host: state.hostDetail.host,
});


const HostDetail = React.createClass({
  propTypes: {
    host: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(
      actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
        this.props.params.hostName,
      ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(editActions.reset());
  },

  render() {
    if (!this.props.host) { return ''; }
    return (
      <div>
        <h2>Host</h2>
        <div>
          IP: {this.props.host.ip}
        </div>
        <div>
          hostname: {this.props.host.hostname}
        </div>
      </div>
    );
  },
});


const routes = {
  path: 'hosts/:hostName',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(HostDetail, styles)
    ),
  },
};

export default routes;
