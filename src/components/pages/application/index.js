import React from 'react';
import cssModules from 'react-css-modules';
import styles from './application.scss';
import actions from './actions/detail';
import editActions from './actions/edit';
import { connect } from 'react-redux';
import store from '../../../store';


const mapStateToProps = (state) => ({
  application: state.applicationDetail.application,
});


const ApplicationDetail = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(
      actions.get(
        this.props.params.serviceId,
        this.props.params.applicationName,
      ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(editActions.reset());
  },

  render() {
    if (!this.props.application) { return ''; }
    return (
      <div>
        <h2>Application</h2>
        <div>
          name: {this.props.application.name}
        </div>
        <div>
          galaxy role: {this.props.application.galaxy_role}
        </div>
      </div>
    );
  },
});


const routes = {
  path: 'applications/:applicationName',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(ApplicationDetail, styles)
    ),
  },
};

export default routes;
