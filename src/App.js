import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

// Pages
import ClusterDetail from 'pages/cluster/detail'
import ClusterList from 'pages/cluster/list'
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Login from 'pages/login'
import NoPage from 'pages/nopage'
import UserList from 'pages/user/list'

import ResolutionContext from 'resolution'
import theme from 'theme'


export default class App extends Component {
  state = {
    height: window.innerHeight,
    width: window.innerWidth,
  }

  componentWillMount() {
    window.onresize = () => {
      this.setState({ height: window.innerHeight })
      this.setState({ width: window.innerWidth })
    }
  }

  render() {
    const context = {
      height: this.state.height,
      width: this.state.width,
    }
    return (
      <ResolutionContext.Provider value={context}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/users" component={UserList} />
              <Route exact path="/clusters" component={ClusterList} />
              <Route exact path="/clusters/:page" component={ClusterList} />
              <Route exact path="/cluster/:id" component={ClusterDetail} />
              <Route path="*" component={NoPage} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </ResolutionContext.Provider>
    )
  }
}
