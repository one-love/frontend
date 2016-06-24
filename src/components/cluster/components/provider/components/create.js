import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/create';
import pluginActions from '../actions/get_plugins';
import store from '../../../../../store';
import { history } from '../../../../../constants';
import Spinner from '../../../../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => {
  const data = {
    plugins: state.pluginList.plugins,
    provider: state.providerCreate.provider,
    status: state.providerCreate.status,
  };
  return data;
};


const ProviderCreate = React.createClass({
  propTypes: {
    plugins: React.PropTypes.array,
    provider: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      fields: {},
      pluginProps: {},
      type: '',
    };
  },

  componentWillMount() {
    store.dispatch(pluginActions.get());
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(
        `/clusters/${nextProps.params.clusterId}/providers/${nextProps.provider.name}/`
      );
      return false;
    }
    return true;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  handleFieldChange(event) {
    const fieldName = event.target.getAttribute('placeholder');
    const fields = { ...this.state.fields };
    fields[fieldName] = event.target.value;
    this.setState({ fields });
  },

  handleTypeChange(event) {
    const plugin = this.props.plugins.find((pl) =>
      pl.type === event.target.value
    );
    this.setState({ pluginProps: plugin.properties });
    this.setState({ type: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(
      this.props.params.clusterId,
      this.state.type,
      this.state.fields,
    ));
  },

  render() {
    let spinner = '';
    let error = '';
    switch (this.props.status) {
      case 'pending':
        spinner = <Spinner />;
        break;
      case 'error':
        error = <div>{errorMessages[this.props.error]}</div>;
        break;
      default:
        break;
    }
    return (
      <div className="form-container">
        {spinner}
        {error}
        <h1 className="form__title">Create Provider</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div>
            <select onClick={this.handleTypeChange} defaultValue="-1" >
              <option id="-1" disabled> Choice One</option>
              {
                this.props.plugins.map(
                  plugin =>
                    <option
                      key={plugin.type}
                      value={plugin.type}
                    > {plugin.type}</option>
                )
              }
            </select>
          </div>
          <div>
            {
              this.state.type !== '' ?
                this.state.pluginProps.map(
                  props =>
                    <div key={props.name}>
                      <label>{props.name}
                        <input
                          type="text"
                          placeholder={props.name}
                          onChange={this.handleFieldChange}
                        />
                      </label>
                    </div>
                ) : <div></div>
            }
          </div>
          <button className="button button--primary">Create</button>
        </form>
      </div>
    );
  },
});


const routes = {
  path: 'create',
  component: connect(mapStateToProps, actions)(ProviderCreate),
};

export default routes;
