import React from 'react';
import { connect } from 'react-redux';
import { get } from '../actions/detail';
import actions from '../actions/edit';
import store from '../../../../../store';
import { history } from '../../../../../constants';
import Spinner from '../../../../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  provider: state.providerDetail.provider,
  status: state.providerEdit.status,
  error: state.providerEdit.error,
});


const ProviderEdit = React.createClass({
  propTypes: {
    provider: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      fields: {},
      pluginFields: {},
    };
  },

  componentWillMount() {
    store.dispatch(get(
      this.props.params.clusterId,
      this.props.params.providerName
    ));
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

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.edit(
      this.props.params.clusterId,
      this.props.params.providerName,
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
    if (!this.props.provider) {
      return (<div></div>);
    }
    return (
      <div className="form-container">
        {spinner}
        {error}
        <h1 className="form__title">Edit Provider</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div>
            {
              this.state.providerFields.map(field =>
                <div key={field.name}>
                  <label>{field.name}
                    <input
                      type="text"
                      placeholder={field.name}
                      onChange={this.handleFieldChange}
                    />
                  </label>
                </div>
              )
            }
          </div>
          <button className="button button--primary">Create</button>
        </form>
      </div>
    );
  },
});


const routes = {
  path: 'edit',
  component: connect(mapStateToProps, actions)(ProviderEdit),
};

export default routes;
