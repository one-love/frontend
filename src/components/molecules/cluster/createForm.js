import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from 'react-file-reader-input';
import base64 from 'base-64';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';

const CreateClusterForm = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {};
  },

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(actions.create(
      this.state.name,
      this.state.sshKey,
      this.state.username,
    ));
    this.props.dispatch(settingsActions.close());
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  },

  handleSSHKeyChange(event, results) {
    if (results.length > 0) {
      const e = results[0][0];
      const content = e.target.result;
      const encodedContent = base64.encode(content);
      this.setState({ sshKey: encodedContent });
      this.setState({ sshKeyName: results[0][1].name });
    }
  },

  render() {
    const height = `${this.context.muiTheme.menuItem.height}px`;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            floatingLabelText="Name"
            onChange={this.handleNameChange}
            required
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Username"
            onChange={this.handleUsernameChange}
            required
          />
        </div>
        <div style={{ height, lineHeight: height }}>
          <FileInput id="ssh" onChange={this.handleSSHKeyChange}>
            {this.state.sshKeyName ? this.state.sshKeyName : 'Select ssh key'}
          </FileInput>
        </div>
        <div>
          <RaisedButton label="Create" type="submit" />
        </div>
      </form>
    );
  },
});


export default CreateClusterForm;
