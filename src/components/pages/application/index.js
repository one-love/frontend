import React from 'react';
import { connect } from 'react-redux';
import actions from './actions/detail';
import editActions from './actions/edit';


const mapStateToProps = (state) => ({
  application: state.applicationDetail.application,
});


const ApplicationDetail = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
    params: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  },

  componentWillMount() {
    this.props.dispatch(
      actions.get(
        this.props.params.serviceId,
        this.props.params.applicationName,
      ));
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
    this.props.dispatch(editActions.reset());
  },

  render() {
    if (!this.props.application) { return <div></div>; }
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
    component: connect(mapStateToProps)(ApplicationDetail),
  },
};

export default routes;
