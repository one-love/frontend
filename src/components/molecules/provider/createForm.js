import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import settingsActions from '../../layouts/layout/actions/settings';
import actions from './actions/create';
import pluginActions from './actions/plugin';

const styles = {
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
};


const mapStateToProps = (state) => {
  const data = {
    cluster: state.clusterDetail.cluster,
    plugins: state.providerPlugins.plugins,
    provider: state.providerCreate.provider,
    providerStatus: state.providerCreate.status,
  };
  if (state.clusterEdit.cluster) {
    data.cluster = state.clusterEdit.cluster;
  }
  return data;
};


export const CreateProviderForm = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object,
    plugins: React.PropTypes.array,
    provider: React.PropTypes.object,
    providerStatus: React.PropTypes.string,
    providerRemove: React.PropTypes.object,
    providerRemoveStatus: React.PropTypes.string,
    dispatch: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      plugins: [],
    };
  },

  getInitialState() {
    return {
      fields: {},
      pluginProps: [],
    };
  },

  componentWillMount() {
    this.props.dispatch(pluginActions.get());
  },

  handleTypeChange(event, key) {
    const plugin = this.props.plugins[key];
    this.setState({ type: plugin.type });
    this.setState({ pluginProps: plugin.properties });
  },

  handleFieldChange(event, value) {
    const fieldName = event.target.id;
    const fields = { ...this.state.fields };
    fields[fieldName] = value;
    this.setState({ fields });
  },

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(
      actions.create(
        this.props.cluster.id,
        this.state.type,
        this.state.fields,
      )
    );
    this.props.dispatch(settingsActions.close());
  },

  render() {
    const providerPlugins = this.props.plugins.map(
      (plugin, index) => (
        <MenuItem key={index} value={index} primaryText={plugin.type} />
      )
    );
    const providerProps = this.state.pluginProps.map(
      (prop) => (
        <div key={prop.name}>
          <TextField
            floatingLabelText={prop.name}
            onChange={this.handleFieldChange}
            id={prop.name}
            required
          />
        </div>
      )
    );
    const selectText = this.state.type ? this.state.type : 'Select Provider Type';
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create Provider</h2>
        <SelectField onChange={this.handleTypeChange} hintText={selectText}>
          {providerPlugins}
        </SelectField>
        {providerProps}
        <div style={styles.button}>
          <RaisedButton label="Create" type="submit" />
        </div>
      </form>
    );
  },
});


export default connect(mapStateToProps, actions)(CreateProviderForm);
