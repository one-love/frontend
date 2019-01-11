import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import EmptyTemplate from 'templates/empty'
import store from 'store'
import styles from './styles'


@observer
class Login extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault()
    const result = await store.auth.login()
    store.auth.password = ''
    if (result.status === 200) {
      this.props.history.push('/')
    } else {
      store.error.message = result.error
      store.error.open = true
    }
  }

  handleEmail = (event) => {
    store.auth.email = event.target.value
  }

  handlePassword = (event) => {
    store.auth.password = event.target.value
  }

  render() {
    const { auth } = store
    return (
      <EmptyTemplate>
        <div style={styles.root}>
          <Paper style={styles.paper}>
            <div>
              <h1>Login</h1>
              <form style={styles.form} onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    label="Email"
                    margin="normal"
                    onChange={this.handleEmail}
                    value={auth.email}
                    type="email"
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
                    value={auth.password}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}


export default withRouter(Login)
