import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

// Components
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

import store from 'store'
import Template from 'templates/default'
import styles from './styles'


@observer
class ClusterDetail extends React.Component {
  state = {
    edit: null,
  }

  componentWillMount() {
    store.title.title = 'Cluster Detail'
    store.cluster.fetch(this.props.match.params.id)
  }

  handleClick = (item) => () => {
    this.setState({
      edit: item,
      [item]: store.cluster.detail[item],
    })
  }

  handleCancel = (item) => () => {
    store.cluster.detail[item] = this.state[item]
    this.setState({
      edit: null,
      [item]: null,
    })
  }

  handleName = (event) => {
    store.cluster.detail.name = event.target.value
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const result = await store.cluster.edit(
      store.cluster.detail,
      { name: store.cluster.detail.name },
    )
    if (result.status >= 400) {
      store.error.message = result.error
      store.error.open = true
    }
    this.setState({
      edit: null,
    })
  }

  render() {
    const name = this.state.edit === 'name'
      ? (
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={store.cluster.detail.name}
            onChange={this.handleName}
          />
          <Button
            variant="outlined"
            style={styles.button}
            color="primary"
            type="submit"
          >
            Save
          </Button>
          <Button
            variant="outlined"
            style={styles.button}
            color="secondary"
            onClick={this.handleCancel('name')}
          >
            Cancel
          </Button>
        </form>
      )
      : (
        <div
          onClick={this.handleClick('name')}
          role="button"
          onKeyDown={this.handleClick('name')}
          tabIndex={0}
        >
          <Tooltip placement="right" title="Click to edit">
            <h1 style={styles.name}>{store.cluster.detail.name}</h1>
          </Tooltip>
        </div>
      )
    return (
      <Template>
        <div style={styles.root}>
          <Paper style={styles.paper}>
            {name}
            <div style={styles.id}>
              id: {store.cluster.detail.id}
            </div>
          </Paper>
        </div>
      </Template>
    )
  }
}


ClusterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}


export default ClusterDetail
