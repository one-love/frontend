import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import EmptyTemplate from 'templates/empty'
import errorActions from 'templates/empty/actions'
import styles from './styles'
import actions from './actions'


const mapStateToProps = (state) => ({
  error: state.login.error,
  status: state.login.status,
})


export class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 200) {
      this.props.history.push('/')
    } else if (nextProps.status === 403) {
      this.props.requestError(nextProps.error)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.requestLogin({
      email: this.state.email,
      password: this.state.password,
    })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  render() {
    return (
      <EmptyTemplate>
        <div style={styles.root}>
          <Paper style={styles.paper}>
            <div>
              <h1>Login</h1>
              <form style={styles.form} onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    label="EMail"
                    margin="normal"
                    onChange={this.handleEmail}
                    value={this.state.email}
                    type="email"
                    data-id="email"
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    onChange={this.handlePassword}
                    value={this.state.password}
                    data-id="password"
                    required
                  />
                </div>
                <div style={styles.button}>
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </div>
      </EmptyTemplate>
    )
  }
}


Login.propTypes = {
  error: PropTypes.string,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  requestError: PropTypes.func.isRequired,
  requestLogin: PropTypes.func.isRequired,
  status: PropTypes.number,
}


export default connect(mapStateToProps, { ...errorActions, ...actions })(withRouter(Login))
