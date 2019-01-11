import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import styles from './styles'


const mapStateToProps = () => ({})


export class Landing extends Component {
  componentWillMount() {
    this.props.requestTitle('Landing')
  }

  render() {
    return (
      <Template style={{}}>
        <div style={styles.photo}>
          <Button variant="contained">
            Landing
          </Button>
        </div>
      </Template>
    )
  }
}


Landing.propTypes = {
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, titleActions)(Landing)
