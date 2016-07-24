import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from 'react-file-reader-input';
import base64 from 'base-64';
import store from '../../../store';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';


const CreateClusterForm = React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {};
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(
      this.state.name,
      this.state.sshKey,
      this.state.username,
    ));
    store.dispatch(settingsActions.close());
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


/* let createCluster = '';
 * if (this.state.create) {
 *   createCluster = (
 *     <div>
 *       <div className="disable" onClick={this.hideCreate}>x</div>
 *       <h1>Create Cluster</h1>
 *       <form onSubmit={this.handleSubmit}>
 *         <div>
 *           <label htmlFor="name">Name</label>
 *           <input
 *             autoFocus
 *             type="text"
 *             id="name"
 *             placeholder="Name"
 *             onChange={this.handleNameChange}
 *             value={this.state.name}
 *           />
 *         </div>
 *         <div>
 *           <FileInput id="ssh" onChange={this.handleSSHKeyChange}>
 *             {this.state.sshKeyName ? this.state.sshKeyName : 'Select ssh key'}
 *           </FileInput>
 *         </div>
 *         <div>
 *           <label htmlFor="username">Username</label>
 *           <input
 *             type="text"
 *             id="username"
 *             placeholder="Username"
 *             onChange={this.handleUsernameChange}
 *             value={this.state.username}
 *           />
 *         </div>
 *         <button className="button">Create</button>
 *       </form>
 *     </div>
 *   );
 * }*/
