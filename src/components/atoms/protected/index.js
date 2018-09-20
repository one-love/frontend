import { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actions from './actions'


const mapStateToProps = (state) => ({
  error: state.me.error,
  status: state.me.status,
  pending: state.me.pending,
  refreshError: state.refresh.error,
  refreshStatus: state.refresh.status,
})


class ProtectedComponent extends Component {
  state = {
    refreshRequested: false,
  }

  componentWillMount() {
    this.props.requestMe()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 200) {
      this.props.auth(true)
    } else if (nextProps.refreshStatus === 401) {
      this.props.auth(false)
      this.props.requestRefreshReset()
      this.props.history.push('/landing')
    } else if (nextProps.refreshStatus === 200) {
      this.setState({ refreshRequested: false })
      this.props.requestMe()
    } else if (nextProps.status === 401) {
      if (!this.state.refreshRequested) {
        this.setState({ refreshRequested: true })
        this.props.requestRefresh()
      }
    }
  }

  render() {
    return null
  }
}


ProtectedComponent.propTypes = {
  auth: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  refreshStatus: PropTypes.number,
  requestMe: PropTypes.func.isRequired,
  requestRefresh: PropTypes.func.isRequired,
  requestRefreshReset: PropTypes.func.isRequired,
  status: PropTypes.number,
}


export default connect(mapStateToProps, actions)(withRouter(ProtectedComponent))
