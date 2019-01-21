import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'


export default class ItemDelete extends Component {
  handleDelete = () => {
    this.props.onDelete()
    this.props.onClose()
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <DialogTitle>
          {`Are you sure you want to delete ${this.props.title}?`}
        </DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleDelete}
            data-id="delete-confirm"
          >
            Delete
          </Button>
          <Button
            onClick={this.props.onClose}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}


ItemDelete.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  open: PropTypes.bool,
}
