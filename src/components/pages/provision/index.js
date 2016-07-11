import React from 'react';
import { connect } from 'react-redux';
import Provision from '../../molecules/provision';
import store from '../../../store';
import actions from './actions/detail';
import editActions from './actions/edit';


const mapStateToProps = (state) => {
  const data = {
    provision: state.provisionDetail.provision,
  };
  if (state.provisionEdit.provision) {
    data.provision = state.provisionEdit.provision;
  }
  return data;
};


const ProvisionDetail = React.createClass({
  propTypes: {
    provision: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.provisionId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(editActions.reset());
  },

  render() {
    return (<Provision provision={this.props.provision} />);
  },
});

const routes = {
  path: ':provisionId',
  indexRoute: {
    component: connect(mapStateToProps, actions)(ProvisionDetail),
  },
};

export default routes;
