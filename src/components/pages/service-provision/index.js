import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import actions from './actions';


const mapStateToProps = state => ({
  prov: state.serviceProvision.provision,
  status: state.serviceProvision.status,
});


const ServiceProvision = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    reset: React.PropTypes.func.isRequired,
    provision: React.PropTypes.func.isRequired,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      this.context.router.push(`/provisions/${nextProps.prov.id}`);
      return false;
    }
    return true;
  },

  componentWillUnmount() {
    this.props.reset();
  },

  handleProvision() {
    this.props.provision(
      this.props.params.clusterId,
      this.props.params.serviceId,
    );
  },

  handleCancel() {
    this.context.router.push(`/clusters/${this.props.params.clusterId}`);
  },

  render() {
    return (
      <div>
        <h2>Are you sure?</h2>
        <FlatButton
          onTouchTap={this.handleProvision}
          label="yes"
          secondary
        />
        <FlatButton
          onTouchTap={this.handleCancel}
          label="no"
          primary
        />
      </div>
    );
  },

});


const routes = {
  path: 'services/:serviceId/provision',
  indexRoute: {
    component: connect(mapStateToProps, actions)(ServiceProvision),
  },
};


export default routes;
