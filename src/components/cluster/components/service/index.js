import React from 'react';
import { connect } from 'react-redux';
import actions from './actions/addService';
import store from '../../../../store';
import { history } from '../../../../constants';

const mapStateToProps = state => ({
  services: state.serviceList.services,
  status: state.clusterService.status,
});

const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    services: React.PropTypes.array,
    status: React.PropTypes.string,
    params: React.PropTypes.object,
  },

  getInitialState() {
    return {
      name: '',
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
    this.setState({ name: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.add(this.props.params.clusterId, this.state.name));
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
    const index = (
      <div>
        <h2>My services:</h2>
        <select onClick={this.handleNameChange}>
          {
            this.props.services.map(
              service =>
              <option
                key={service.id}
                cluster={service}
              > {service.name} </option>
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
