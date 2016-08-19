import React from 'react';
import { connect } from 'react-redux';
import InlineEdit from 'react-edit-inline';
import actions from './actions/detail';
import editActions from './actions/edit';
import { history } from '../../../constants';
import notificationActions from '../../../containers/app/actions';


const mapStateToProps = (state) => ({
  host: state.hostDetail.host,
  status: state.hostEdit.status,
  error: state.hostEdit.error,
  editHost: state.hostEdit,
});


const HostDetail = React.createClass({
  propTypes: {
    host: React.PropTypes.object,
    params: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
    editHost: React.PropTypes.object,
  },

  componentWillMount() {
    this.props.dispatch(
      actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
        this.props.params.hostName,
      ));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'error') {
      this.props.dispatch(editActions.reset());
      this.props.dispatch(notificationActions.open(nextProps.error));
      this.props.dispatch(
        actions.get(
          this.props.params.clusterId,
          this.props.params.providerName,
          this.props.params.hostName,
        ));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      let link = `/clusters/${nextProps.params.clusterId}`;
      link += `/providers/${nextProps.params.providerName}`;
      link += `/hosts/${nextProps.editHost.host.hostname}/`;
      history.push(link);
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
        this.props.params.clusterId,
        this.props.params.providerName,
        this.props.params.hostName,
        data
      )
    );
  },

  render() {
    if (!this.props.host) { return <div />; }
    return (
      <div>
        <h2>Host</h2>
        <div>
          IP:
          <InlineEdit
            paramName="ip"
            text={this.props.host.ip}
            change={this.dataChanged}
          />
        </div>
        <div>
          Hostname:
          <InlineEdit
            paramName="hostname"
            text={this.props.host.hostname}
            change={this.dataChanged}
          />
        </div>
      </div>
    );
  },
});


const routes = {
  path: 'hosts/:hostName',
  indexRoute: {
    component: connect(mapStateToProps)(HostDetail),
  },
};

export default routes;
