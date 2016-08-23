import React from 'react';
import { Router, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { requireAuth } from '../utils';
import Services from '../components/pages/service-list';
import Clusters from '../components/pages/cluster-list';
import Provisions from '../components/pages/provision-list';
import Login from '../components/pages/login';
import NotFound from '../components/pages/not-found';
import Layout from '../components/layouts/layout';
import { StyleRoot } from 'radium';
import App from './app';


const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Layout,
      onEnter: requireAuth,
      childRoutes: [
        Services,
        Clusters,
        Provisions,
      ],
    },
    {
      path: '/login/',
      component: Login,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


function Main(props) {
  return (
    <StyleRoot>
      <MuiThemeProvider muiTheme={props.theme}>
        <Router history={hashHistory} routes={routes} />
      </MuiThemeProvider>
    </StyleRoot>
  );
}


Main.propTypes = {
  theme: React.PropTypes.object,
};


export default connect(mapStateToProps)(Main);
