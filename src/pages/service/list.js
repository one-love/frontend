import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import { observer } from 'mobx-react'

// Components
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

// Icons
import AddIcon from '@material-ui/icons/Add'

import store from 'store'
import Template from 'templates/default'
import ItemDelete from 'components/organisms/item-delete'
import styles from './styles'


@observer
class ServiceList extends React.Component {
  state = {
    delete: false,
    name: '',
    showMenu: false,
  }

  componentWillMount() {
    store.title.title = 'Service List'
    store.service.fetchAll()
  }

  async componentWillReceiveProps(nextProps) {
    const oldPage = Number(this.props.match.params.page || '0')
    const newPage = Number(nextProps.match.params.page || '0')
    if (oldPage !== newPage) {
      const result = await store.service.fetchAll(newPage)
      if (result.status >= 400) {
        store.error.message = result.error
        store.error.open = true
      }
    }
  }

  handleDeleteOpen = () => {
    this.setState({ delete: true })
  }

  handleDeleteClose = () => {
    this.setState({ delete: false })
  }

  handleDelete = () => {
    const selected = store.service.list.data.filter(service => service.selected)
    selected.forEach(service => store.service.remove(service.id))
  }

  handleMenuOpen = () => {
    this.setState({ showMenu: true })
  }

  handleMenuClose = () => {
    this.setState({ showMenu: false })
  }

  handleServiceAdd = async (event) => {
    event.preventDefault()
    const result = await store.service.create(this.state.name)
    if (result.status >= 400) {
      store.error.message = result.error
      store.error.open = true
    } else {
      this.handleMenuClose()
    }
  }

  handleServiceName = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const page = Number(this.props.match.params.page || '0')
    const previous = page !== 0
      ? (
        <Link
          to={page !== 1 ? `/services/${page - 1}` : '/services'}
          style={this.props.theme.overrides.noDecorationLink}
        >
          <Button variant="outlined">
            &lt;
          </Button>
        </Link>
      )
      : (
        <Button variant="outlined" disabled>
          &lt;
        </Button>
      )
    const next = page < store.service.list.pages - 1
      ? (
        <Link
          to={`/services/${page + 1}`}
          style={this.props.theme.overrides.noDecorationLink}
        >
          <Button variant="outlined">
            &gt;
          </Button>
        </Link>
      )
      : (
        <Button variant="outlined" disabled>
          &gt;
        </Button>
      )
    const services = store.service.list.data.map(service => (
      <List style={styles.item} key={service.id}>
        <ListItem dense button>
          <ListItemText primary={service.name} />
          <ListItemSecondaryAction>
            <Link
              to={`/service/${service.id}`}
              style={this.props.theme.overrides.noDecorationLink}
            >
              <Button
                style={styles.detail}
                variant="outlined"
                color="primary"
              >
                Details
              </Button>
            </Link>
            <Checkbox
              onChange={() => { service.selected = !service.selected }}
              data-id={`checkbox-${service.id}`}
              checked={service.selected}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    ))
    const selected = store.service.list.data.filter(service => service.selected)
    return (
      <Template>
        <div style={styles.actions}>
          <Tooltip title="Add new task" placement="right">
            <Fab
              color="primary"
              onClick={this.handleMenuOpen}
              data-id="add-task"
              style={styles.add}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
          <Dialog
            open={this.state.showMenu}
            onClose={this.handleMenuClose}
          >
            <DialogTitle>Add new service</DialogTitle>
            <DialogContent>
              <TextField
                label="service name"
                style={styles.text}
                onChange={this.handleServiceName}
                data-id="name"
                autoFocus
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.handleServiceAdd}
                data-id="create"
              >
                Create
              </Button>
              <Button
                onClick={this.handleMenuClose}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant="contained"
            color="secondary"
            disabled={selected.length === 0}
            onClick={this.handleDeleteOpen}
            data-id="delete"
          >
            Delete
          </Button>
        </div>
        <ItemDelete
          onDelete={this.handleDelete}
          onClose={this.handleDeleteClose}
          open={this.state.delete}
          title="services"
        />
        {services}
        <div style={styles.center}>
          {previous}
          <Avatar style={styles.page}>{String(page)}</Avatar>
          {next}
        </div>
      </Template>
    )
  }
}


ServiceList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
    }).isRequired,
  }).isRequired,
  theme: PropTypes.shape().isRequired,
}


export default withTheme()(ServiceList)
