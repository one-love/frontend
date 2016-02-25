import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';


const mapStateToProps = state => ({
  providers: state.providerList.providers,
  status: state.providerList.status,
});

const ProviderList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    params: React.PropTypes.object,
    providers: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.clusterId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    return (
      <div>
        <h2>My providers:</h2>
        <ul>
          {
            this.props.providers.map(
              provider =>
              <li key={provider.name}>
              <Link
                key={provider.id}
                to={`/clusters/${this.props.params.clusterId}/providers/${provider.name}/`}
                provider={provider}
              > {provider.name} </Link> </li>
            )
          }
        </ul>
        <Link to={`/clusters/${this.props.params.clusterId}/providers/create/`}>Create</Link>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(ProviderList);

