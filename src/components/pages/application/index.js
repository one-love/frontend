import React from 'react';
import { connect } from 'react-redux';
import InlineEdit from 'react-edit-inline';
import actions from './actions/detail';
import editActions from './actions/edit';
import notificationActions from '../../../containers/app/actions';


const mapStateToProps = (state) => ({
  application: state.applicationDetail.application,
  status: state.applicationEdit.status,
  error: state.applicationEdit.error,
  editApplication: state.applicationEdit,
});


const ApplicationDetail = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
    params: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  componentWillMount() {
    this.props.dispatch(
      actions.get(
        this.props.params.serviceId,
        this.props.params.applicationName,
      ));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'error') {
      this.props.dispatch(editActions.reset());
      this.props.dispatch(notificationActions.open(nextProps.error));
      this.props.dispatch(
        actions.get(
          this.props.params.serviceId,
          this.props.params.applicationName,
        ));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      let link = `/services/${nextProps.params.serviceId}`;
      link += `/applications/${nextProps.editApplication.application.name}/`;
      this.context.router.push(link);
      this.props.dispatch(editActions.reset());
    }
    return true;
  },
  componentWillUnmount() {
    this.props.dispatch(actions.reset());
    this.props.dispatch(editActions.reset());
  },

  dataChanged(data) {
    this.props.dispatch(
      editActions.edit(
        this.props.params.serviceId,
        this.props.params.applicationName,
        data
      )
    );
  },

  render() {
    if (!this.props.application) { return <div />; }
    return (
      <div>
        <h2>Application</h2>
        <div>
          Name:
          <InlineEdit
            paramName="name"
            text={this.props.application.name}
            change={this.dataChanged}
          />
        </div>
        <div>
          Galaxy role:
          <InlineEdit
            paramName="galaxy_role"
            text={this.props.application.galaxy_role}
            change={this.dataChanged}
          />
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
