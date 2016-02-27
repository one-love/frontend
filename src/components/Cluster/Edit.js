import React from 'react';
import { connect } from 'react-redux';
import actions from './actions/edit';
import store from '../../store';
import { history } from '../../constants';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  status: state.clusterEdit.status,
  error: state.clusterEdit.error,
});


const Component = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
    };
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(`/clusters/${nextProps.params.clusterId}/`);
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

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.edit(this.props.params.clusterId, this.state.name));
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
        <h1 className="form__title">Edit Cluster</h1>
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
          <button className="button button--primary">Edit</button>
        </form>
      </div>
    );
  },
});

export const Edit = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'edit',
  component: Edit,
};

export default routes;
