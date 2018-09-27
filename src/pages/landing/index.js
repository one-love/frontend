import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'


const mapStateToProps = () => ({})


export class Landing extends Component {
  componentWillMount() {
    this.props.requestTitle('Landing')
  }

  render() {
    return (
      <Template>
        <Button variant="contained">
          Landing
        </Button>
      </Template>
    )
  }
}


Landing.propTypes = {
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, titleActions)(Landing)
