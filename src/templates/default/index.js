import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// Components
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// Icons
import CloseIcon from '@material-ui/icons/Clear'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MenuIcon from '@material-ui/icons/Menu'
import TaskIcon from '@material-ui/icons/FitnessCenter'
import WorkflowIcon from '@material-ui/icons/Tune'

import EmptyTemplate from 'templates/empty'
import actions from 'components/atoms/protected/actions'
import styles from './styles'


const mapStateToProps = (state) => ({
  open: state.error.open,
  authState: state.auth.state,
})


class Template extends Component {
  state = {
    showMenu: false,
  }

  handleMenuOpen = () => {
    this.setState({ showMenu: true })
  }

  handleMenuClose = () => {
    this.setState({ showMenu: false })
  }

  handleLogout = () => {
    this.props.auth(false)
    this.props.requestLogout()
    this.props.history.push('/landing')
  }

  render() {
    const AnonButton = <Link to="/login" style={styles.login}>
                         <Button color="inherit">Login</Button>
                       </Link>
    const LoggedinButton = <Button color="inherit" onClick={this.handleLogout}>
                             Logout
                           </Button>
    const AuthButton = this.props.authState
                     ? LoggedinButton
                     : AnonButton
    const menuButtonAction = this.props.authState
                           ? this.handleMenuOpen
                           : null
    return (
      <EmptyTemplate secure={this.props.secure}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={menuButtonAction}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              Pulsar
            </Typography>
            {AuthButton}
          </Toolbar>
        </AppBar>
        {this.props.children}
        <Drawer open={this.state.showMenu} onClose={this.handleMenuClose}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" style={styles.flex}>
                &nbsp;
              </Typography>
              <IconButton color="inherit" onClick={this.handleMenuClose}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div
            onClick={this.handleMenuClose}
            style={styles.menu}
          >
            <Link to="/" style={styles.a}>
              <MenuItem>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                Dashboard
              </MenuItem>
            </Link>
            <Link to="/tasks" style={styles.a}>
              <MenuItem>
                <ListItemIcon>
                  <TaskIcon />
                </ListItemIcon>
                Tasks
              </MenuItem>
            </Link>
            <Link to="/workflows" style={styles.a}>
              <MenuItem>
                <ListItemIcon>
                  <WorkflowIcon />
                </ListItemIcon>
                Workflows
              </MenuItem>
            </Link>
          </div>
        </Drawer>
      </EmptyTemplate>
    )
  }
}


Template.propTypes = {
  auth: PropTypes.func.isRequired,
  authState: PropTypes.bool,
  children: PropTypes.node,
  history: PropTypes.object.isRequired,
  requestLogout: PropTypes.func.isRequired,
  secure: PropTypes.bool,
}


export default connect(mapStateToProps, actions)(withRouter(Template))
