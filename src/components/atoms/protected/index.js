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
    const { auth } = store
    const result = await auth.refresh()
    auth.auth = result.status === 200
  }

  componentWillUnmount() {
    this.logged = false
    clearInterval(this.interval)
  }

  refresh = async () => {
    const { auth, error } = store
    const result = await auth.refresh()
    if (2 * auth.accessExpire > auth.refreshExpire) {
      error.message = (
        <div>
          Refresh token is soon to expire! Please go to
          &nbsp;
          <a href="/login">login page</a>.
        </div>
      )
      error.open = true
    }
    auth.auth = result.status === 200
  }

  render() {
    const { auth, me } = store
    if (auth.auth) {
      if (!this.logged) {
        this.logged = true
        me.fetch()
        if (auth.accessExpire > 1) {
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
