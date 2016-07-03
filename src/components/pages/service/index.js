import React from 'react';
import cssModules from 'react-css-modules';
import styles from './service.scss';
import { connect } from 'react-redux';
import actions from './actions/detail';
import store from '../../../store';
import ApplicationList from '../application-list';

const mapStateToProps = (state) => {
  const data = {
    service: state.serviceDetail.service,
  };
  return data;
};


const ServiceDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    service: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.serviceId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.service === undefined) {
      return <div></div>;
    }
    return (
      <div styleName="item">
        <div>
          <h2>Service: {this.props.service.name}</h2>
          <div styleName="item">
            <h3>email:{this.props.service.user.email}</h3>
          </div>
        </div>
        <div>
          <ApplicationList serviceId={this.props.service.id} />
        </div>
      </div>
    );
  },
});


const routes = {
  path: ':serviceId',
  indexRoute: { component: connect(mapStateToProps, actions)(cssModules(ServiceDetail, styles)) },
};

export default routes;
