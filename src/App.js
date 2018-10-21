import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Login from 'pages/login'
import UserList from 'pages/user-list'
import NoPage from 'pages/nopage'
import store from 'store'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users" component={UserList} />
            <Route path="*" component={NoPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
