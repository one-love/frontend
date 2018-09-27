import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import errorActions from 'templates/empty/actions'
import actions from './actions'
import styles from './styles'


const mapStateToProps = (state) => ({
  expire: state.refresh.expire,
  status: state.refresh.status,
})


class ProtectedComponent extends Component {
  state = {
    logged: false,
  }

  componentWillMount() {
    this.props.requestRefresh()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 200 && !this.state.logged) {
      this.interval = setInterval(
        () => { this.props.requestRefresh() },
        (this.props.expire - 1) * 1000,
      )
      this.setState({ logged: true })
      this.props.auth(true)
    } else if (nextProps.status !== null) {
      this.props.auth(false)
      if (this.state.logged) {
        const error = (
          <div>
            Error refreshing login token. Please go to &nbsp;
            <Link to="/login" style={styles.link}>Login</Link>
          </div>
        )
        this.props.requestError(error)
      } else {
        this.props.history.push('/landing')
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return null
  }
}


ProtectedComponent.propTypes = {
  auth: PropTypes.func.isRequired,
  expire: PropTypes.number,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  requestError: PropTypes.func.isRequired,
  requestRefresh: PropTypes.func.isRequired,
  status: PropTypes.number,
}


ProtectedComponent.defaultProps = {
  expire: 900,
}


export default connect(mapStateToProps, { ...errorActions, ...actions })(
  withRouter(ProtectedComponent),
)
