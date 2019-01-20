import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Login from 'pages/login'
import UserList from 'pages/user/list'
import NoPage from 'pages/nopage'

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
              <Route path="*" component={NoPage} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </ResolutionContext.Provider>
    )
  }
}
