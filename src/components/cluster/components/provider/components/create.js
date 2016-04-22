import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/create';
import pluginActions from '../actions/get_plugins';
import store from '../../../../../store';
import { history } from '../../../../../constants';


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


const Component = React.createClass({
  propTypes: {
    plugins: React.PropTypes.array,
    provider: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
      type: '',
      properties: {},
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

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleTypeChange(event) {
    const plugin = this.props.plugins.find((pl) =>
      pl.type === event.target.value
    );
    this.setState({ properties: plugin.properties });
    this.setState({ type: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(
      this.props.params.clusterId,
      this.state.name,
      this.state.type
    ));
  },

  render() {
    let spinner = '';
    let error = '';
    switch (this.props.status) {
      case 'pending':
        spinner = <div>spinner</div>;
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
          <div className="form__item">
            <label htmlFor="name">Name</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />
          </div>
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
          <button className="button button--primary">Create</button>
        </form>
      </div>
    );
  },
});

export const Create = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'create',
  component: Create,
};

export default routes;
