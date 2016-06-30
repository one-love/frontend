import React from 'react';
import cssModules from 'react-css-modules';
import styles from './service.scss';
import { connect } from 'react-redux';
import actions from './actions/detail';
import store from '../../../store';

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
          <div styleName="label">
            email:
          </div>
          <div styleName="item">
            {this.props.service.user.email}
          </div>
        </div>
        <div>
          <div styleName="label">
            Applications:
          </div>
          <div styleName="item">
            {
              this.props.service.applications ?
              this.props.service.applications.map(
                (app) =>
                  <span key={app.name}>
                    {app.name}
                  </span>
              ) :
              'No application right now'
            }
          </div>
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
