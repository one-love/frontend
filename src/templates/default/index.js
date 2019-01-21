import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

// Components
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import EmptyTemplate from 'templates/empty'
import store from 'store'
import styles from './styles'


@observer
class Template extends Component {
  handleLogout = async () => {
    await store.auth.logout()
    this.props.history.push('/landing')
  }

  render() {
    const { auth, title } = store
    const AnonButton = (
      <Link to="/login" style={styles.a.white}>
        <Button color="inherit">Login</Button>
      </Link>
    )
    const LoggedinButton = (
      <Button color="inherit" onClick={this.handleLogout}>
        Logout
      </Button>
    )
    const AuthButton = auth.auth ? LoggedinButton : AnonButton
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.flex}>
              One Love - {title.title}
            </Typography>
            {AuthButton}
          </Toolbar>
        </AppBar>
        <EmptyTemplate secure={this.props.secure} style={this.props.style}>
          {this.props.children}
        </EmptyTemplate>
      </div>
    )
  }
}


Template.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  secure: PropTypes.bool,
  style: PropTypes.shape({}),
}


export default withRouter(Template)
