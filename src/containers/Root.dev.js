import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import OneLoveApp from './OneLove';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Cluster from '../components/Cluster';
import ClusterList from '../components/ClusterList';
import DevTools from './DevTools';
import { Router, IndexRoute, Route } from 'react-router';
import { history } from '../constants';
import { requireAuth } from '../utils';


const Root = React.createClass({
  propTypes: {
    store: PropTypes.object,
  },

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route onEnter={requireAuth} path="/" component={Layout}>
              <IndexRoute component={OneLoveApp} />
              <Route path="logout/" component={Logout} />
              <Route path="clusters/">
                <IndexRoute component={ClusterList} />
                <Route path=":clusterId/" component={Cluster} />
              </Route>
            </Route>
            <Route path="/login/" component={Login} />
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  },
});

export default Root;
