import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import errorActions from 'templates/empty/actions'


const mapStateToProps = () => ({})


class Home extends Component {
  render() {
    return (
      <Template secure>
        <Button variant="contained" onClick={() => this.props.requestError('Error message')}>
          Display Error
        </Button>
      </Template>
    )
  }
}


Home.propTypes = {
  requestError: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, errorActions)(withRouter(Home))
