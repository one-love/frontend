import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import errorActions from 'templates/empty/actions'
import titleActions from 'templates/default/actions'


const mapStateToProps = () => ({})


export class Dashboard extends Component {
  componentWillMount() {
    this.props.requestTitle('Dashboard')
  }

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


Dashboard.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  Dashboard,
)
