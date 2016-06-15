import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/add-service';
import store from '../../../../../store';
import { history } from '../../../../../constants';
import Spinner from '../../../../layout/spinner';

const errorMessages = {
  CONFLICT: 'CONFLICT, maybe this service alredy exist in cluster',
};

const mapStateToProps = state => ({
  services: state.serviceList.services,
  status: state.clusterService.status,
  error: state.clusterService.error,
});

const ClusterService = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    services: React.PropTypes.array,
    status: React.PropTypes.string,
    params: React.PropTypes.object,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      service_id: '',
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
    const serviceId = event.target.children[event.target.selectedIndex].id;
    this.setState({ service_id: serviceId });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.add(this.props.params.clusterId, this.state.service_id));
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
        spinner = <Spinner />;
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
        <select onClick={this.handleNameChange} defaultValue="-1" >
          <option id="-1" disabled> Choice One</option>
          {
            this.props.services.map(
              service =>
              <option
                key={service.id}
                id={service.id}
              > {service.name}/{service.user.username} </option>
            )
          }
        </select>
        <div>
          <button
            className="button button--primary"
            onClick={this.handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    );
    if (this.props.children) {return children;}
    return index;
  },
});


const routes = {
  path: 'service',
  indexRoute: { component: connect(mapStateToProps, actions)(ClusterService) },
};

export default routes;
