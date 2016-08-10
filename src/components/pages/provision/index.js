/* eslint react/no-is-mounted: 0 */

import React from 'react';
import { connect } from 'react-redux';
import Provision from '../../molecules/provision';
import actions from './actions/detail';
import editActions from './actions/edit';
import { socketio } from '../../../utils';


const mapStateToProps = (state) => {
  const data = {
    provision: state.provisionDetail.provision,
    error: state.provisionDetail.error,
    socketIoUrl: state.backend.socketIoUrl,
  };
  return data;
};


const ProvisionDetail = React.createClass({
  propTypes: {
    provision: React.PropTypes.object,
    params: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
    socketIoUrl: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      provision: {
        logs: [],
      },
    };
  },

  componentWillMount() {
    this.props.dispatch(actions.get(this.props.params.provisionId));
  },

  componentDidMount() {
    socketio(this.props.socketIoUrl).on('provision', message => {
      if (this.props.provision.id === message.id) {
        switch (message.status) {
          case 'SUCCESS':
            this.props.dispatch(actions.successProvision(this.props.provision));
            break;
          case 'FAILED':
            this.props.dispatch(
              actions.failProvision(this.props.provision, message)
            );
            break;
          default:
            this.props.dispatch(
              actions.failProvision(
                this.props.provision,
                'unexpected error on provision',
              )
            );
            break;
        }
      }
    });
    socketio(this.props.socketIoUrl).on('log', message => {
      const provision = this.props.provision;
      provision.logs.push(message);
      if (this.isMounted()) {
        this.setState({ provision });
      }
    });
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
    this.props.dispatch(editActions.reset());
  },

  render() {
    return (<Provision provision={this.props.provision} />);
  },
});

const routes = {
  path: ':provisionId',
  indexRoute: {
    component: connect(mapStateToProps)(ProvisionDetail),
  },
};

export default routes;
