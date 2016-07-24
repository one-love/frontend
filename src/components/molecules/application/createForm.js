import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import store from '../../../store';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';


const CreateApplicationForm = React.createClass({
  propTypes: {
    serviceId: React.PropTypes.string.isRequired,
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
      this.props.serviceId,
      this.state.name,
      this.state.galaxyRole,
    ));
    store.dispatch(settingsActions.close());
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleGalaxyRoleChange(event) {
    this.setState({ galaxyRole: event.target.value });
  },

  render() {
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
            floatingLabelText="Galaxy Role"
            onChange={this.handleGalaxyRoleChange}
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


export default CreateApplicationForm;
