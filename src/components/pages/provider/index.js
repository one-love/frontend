import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import styles from './provider.scss';
import { connect } from 'react-redux';
import actions from './actions/detail';
import store from '../../../store';
import List from '../../molecules/transition-appear';
import Host from '../../molecules/host';
import HostDetail from '../host';


const mapStateToProps = (state) => {
  const data = {
    provider: state.providerDetail.provider,
  };
  return data;
};


const ProviderDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    provider: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(
      actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (!this.props.provider) {
      return <div></div>;
    }
    const clusterId = this.props.params.clusterId;
    const providerName = this.props.params.providerName;
    const providerUrl = `/clusters/${clusterId}/providers/${providerName}`;
    const hosts = (
      <List title="Hosts" cluster="active">
        {
          this.props.provider.hosts.map(host => {
            const link = `${providerUrl}/hosts/${host.hostname}`;
            return (
              <Link key={host.hostname} to={link}>
                <Host name={host.hostname} />
              </Link>
            );
          })
        }
      </List>
    );
    return (
      <div styleName="item">
        <div>
          <h2>Provider</h2>
          Name: {this.props.provider.name}
          <h3>Hosts</h3>
          {hosts}
        </div>
      </div>
    );
  },
});


const routes = {
  path: 'providers/:providerName',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(ProviderDetail, styles)
    ),
  },
  childRoutes: [
    HostDetail,
  ],
};

export default routes;
