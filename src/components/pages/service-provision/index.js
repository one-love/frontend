import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { history } from '../../../constants';
import store from '../../../store';
import styles from './service-provision.scss';
import actions from './actions';


const mapStateToProps = state => ({
  prov: state.serviceProvision.provision,
  status: state.serviceProvision.status,
});


const ServiceProvision = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(`/provisions/${nextProps.prov.id}`);
      return false;
    }
    return true;
  },

  handleProvision() {
    store.dispatch(
      actions.provision(
        this.props.params.clusterId,
        this.props.params.serviceId,
      )
    );
  },

  handleCancel() {
    history.push(`/clusters/${this.props.params.clusterId}`);
  },

  render() {
    return (
      <div>
        <h2>Are you sure?</h2>
        <button styleName="button" onClick={this.handleProvision}>Yes</button>
        <button styleName="button" onClick={this.handleCancel}>No</button>
      </div>
    );
  },

});


const routes = {
  path: 'services/:serviceId/provision',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(ServiceProvision, styles)
    ),
  },
};


export default routes;
