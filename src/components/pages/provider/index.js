import React from 'react';
import cssModules from 'react-css-modules';
import styles from './provider.scss';
import { connect } from 'react-redux';
import actions from './actions/detail';
import store from '../../../store';
import List from '../../molecules/transition-appear';
import Host from '../../molecules/host';


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
    if (this.props.provider === undefined) {
      return <div></div>;
    }
    return (
      <div styleName="item">
        <div>
          <h2>Provider</h2>
          Name: {this.props.provider.name}
          <List title="Hosts" cluster="active">
            {
              this.props.provider.hosts.map(host => (
                <Host key={host.ip} name={host.hostname} />
              ))
            }
          </List>
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
};

export default routes;
