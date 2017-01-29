import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';

const CreateServiceForm = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {};
  },

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(actions.create(this.state.name));
    this.props.dispatch(settingsActions.close());
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
