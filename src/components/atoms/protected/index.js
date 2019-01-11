import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from 'store'


@observer
class ProtectedComponent extends React.Component {
  logged = false

  expired = true

  componentWillMount() {
    store.auth.refresh()
  }

  componentWillUnmount() {
    this.logged = false
    clearInterval(this.interval)
  }

  componentWillReact() {
    const { auth, error } = store
    if (auth.auth) {
      if (!this.logged) {
        if (auth.accessExpire > 1) {
          this.logged = true
          this.interval = setInterval(
            async () => {
              await auth.refresh()
              if (2 * auth.accessExpire > auth.refreshExpire) {
                error.message = 'Refresh token is soon to expire! Please go to login page.'
                error.open = true
              }
            },
            (auth.accessExpire - 1) * 1000,
          )
        }
      }
    } else if (this.logged) {
      if (this.expired) {
        this.expired = false
        clearInterval(this.interval)
        error.message = 'Error refreshing login token! Please login!'
        error.open = true
      }
      if (this.props.redirect) {
        this.props.history.push('/login')
      }
    } else if (this.props.redirect) {
      this.props.history.push('/landing')
    }
  }

  render() {
    return null
  }
}


ProtectedComponent.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  redirect: PropTypes.bool,
}


ProtectedComponent.defaultProps = {
  redirect: false,
}


export default withRouter(ProtectedComponent)
