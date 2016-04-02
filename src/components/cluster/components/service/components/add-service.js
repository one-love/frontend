import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/add-service';
import store from '../../../../../store';
import { history } from '../../../../../constants';

const errorMessages = {
  CONFLICT: 'CONFLICT, maybe this service alredy exist in cluster',
};

const mapStateToProps = state => ({
  services: state.serviceList.services,
  status: state.clusterService.status,
  error: state.clusterService.error,
});

const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    services: React.PropTypes.array,
    status: React.PropTypes.string,
    params: React.PropTypes.object,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
      username: '',
    };
  },

  componentWillMount() {
    store.dispatch(actions.get());
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
    const service = event.target.value;
    const serviceName = service.substring(0, service.lastIndexOf('/'));
    const serviceUsername = service.substring(service.lastIndexOf('/') + 1, service.length);
    this.setState({ name: serviceName, username: serviceUsername });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(
      actions.add(this.props.params.clusterId, this.state.name, this.state.username)
    );
  },

  render() {
    if (this.props.services === undefined) {
      return <div></div>;
    }
    const children = (
      <div>
        {this.props.children}
      </div>
    );
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
    const index = (
      <div>
      {spinner}
      {error}
        <h2>My services:</h2>
        <select onClick={this.handleNameChange} >
          {
            this.props.services.map(
              service =>
              <option
                key={service.id}
                service={service}
                username={service.user.username}
              > {service.name}/{service.user.username} </option>
            )
          }
        </select>
        <div>
          <button className="button button--primary" onClick={this.handleSubmit}>
            Create
          </button>
          {this.state.name}
        </div>
      </div>
    );
    if (this.props.children) {return children;}
    return index;
  },
});

export const List = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'service',
  indexRoute: { component: List },
};

export default routes;
