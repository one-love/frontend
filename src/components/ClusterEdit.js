import React from 'react';
import { connect } from 'react-redux';
import { edit, reset, actions } from '../actions/cluster/Edit';
import { get } from '../actions/cluster/Detail';
import store from '../store';
import { history } from '../constants';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  cluster: state.cluster.cluster,
  status: state.clusterEdit.status,
  error: state.clusterEdit.error,
});


const ClusterEdit = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
    };
  },

  componentWillMount() {
    store.dispatch(get(this.props.params.clusterId));
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      store.dispatch(reset());
      history.push(`/clusters/${this.props.params.clusterId}/`);
      return false;
    }
    return true;
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(edit(this.props.params.clusterId, this.state.name));
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
        <h1 className="form__title">Create Cluster</h1>
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

export default connect(mapStateToProps, actions)(ClusterEdit);
