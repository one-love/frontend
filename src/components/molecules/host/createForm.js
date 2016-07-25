import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import store from '../../../store';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';


const CreateHostForm = React.createClass({
  propTypes: {
    clusterId: React.PropTypes.string.isRequired,
    providerName: React.PropTypes.string.isRequired,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {};
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(
      this.props.clusterId,
      this.props.providerName,
      this.state.hostname,
      this.state.ip,
    ));
    store.dispatch(settingsActions.close());
  },

  handleHostnameChange(event) {
    this.setState({ hostname: event.target.value });
  },

  handleIPChange(event) {
    this.setState({ ip: event.target.value });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            floatingLabelText="Hostname"
            onChange={this.handleHostnameChange}
            required
            autoFocus
          />
        </div>
        <div>
          <TextField
            floatingLabelText="IP"
            onChange={this.handleIPChange}
            required
          />
        </div>
        <div>
          <RaisedButton label="Create" type="submit" />
        </div>
      </form>
    );
  },
});


export default CreateHostForm;
