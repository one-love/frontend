import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from 'store'


@observer
class ProtectedComponent extends React.Component {
  logged = false

  expired = true

  async componentWillMount() {
    const { auth, me } = store
    const result = await auth.refresh()
    auth.auth = result.status === 200
    if (auth.auth) {
      me.fetch()
    }
  }

  componentWillUnmount() {
    this.logged = false
    clearInterval(this.interval)
  }

  refresh = async () => {
    const { auth, error, me } = store
    const result = await auth.refresh()
    if (2 * auth.accessExpire > auth.refreshExpire) {
      error.message = 'Refresh token is soon to expire! Please go to login page.'
      error.open = true
    }
    store.auth.auth = result.status === 200
    if (auth.auth) {
      me.fetch()
    }
  }

  render() {
    const { auth, me } = store
    if (auth.auth) {
      if (!this.logged) {
        if (auth.accessExpire > 1) {
          this.logged = true
          me.fetch()
          this.interval = setInterval(
            this.refresh,
            (auth.accessExpire - 1) * 1000,
          )
        }
      }
    } else if (this.logged) {
      this.expired = false
      clearInterval(this.interval)
      if (this.props.redirect) {
        this.props.history.push('/login')
      }
    } else if (this.props.redirect && auth.auth === false) {
      this.props.history.push('/landing')
    }
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
