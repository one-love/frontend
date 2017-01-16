import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import store from '../../../store';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const CreateServiceForm = React.createClass({
  getInitialState() {
    return {};
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(this.state.name));
    store.dispatch(settingsActions.close());
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            floatingLabelText="Name"
            onChange={this.handleNameChange}
            required
            autoFocus
          />
        </div>
        <div>
          <RaisedButton label="Create" type="submit" />
        </div>
      </form>
    );
  },
});


export default CreateServiceForm;
