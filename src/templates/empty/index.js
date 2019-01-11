import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import ProtectedComponent from 'components/atoms/protected'
import store from 'store'


@observer
class EmptyTemplate extends Component {
  handleClose = () => {
    const { error } = store
    error.message = ''
    error.open = false
  }

  render() {
    const { error } = store
    return (
      <div style={this.props.style}>
        <ProtectedComponent redirect={this.props.secure} />
        {this.props.children}
        <Snackbar
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={error.open}
          onClose={this.handleClose}
          message={error.message}
          action={(
            <Button
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              CLOSE
            </Button>
          )}
        />
      </div>
    )
  }
}


EmptyTemplate.propTypes = {
  children: PropTypes.node,
  secure: PropTypes.bool,
  style: PropTypes.shape({}),
}


EmptyTemplate.defaultProps = {
  style: {
    padding: 20,
  },
}


export default EmptyTemplate
