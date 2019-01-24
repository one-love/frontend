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
class ProviderDetail extends React.Component {
  state = {
    edit: null,
  }

  componentWillMount() {
    store.title.title = 'Provider Detail'
    store.provider.fetch(this.props.match.params.id)
  }

  handleClick = (item) => () => {
    this.setState({
      edit: item,
      [item]: store.provider.detail[item],
    })
  }

  handleCancel = (item) => () => {
    store.provider.detail[item] = this.state[item]
    this.setState({
      edit: null,
      [item]: null,
    })
  }

  handleName = (event) => {
    store.provider.detail.name = event.target.value
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const result = await store.provider.edit(
      store.provider.detail,
      { name: store.provider.detail.name },
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
            value={store.provider.detail.name}
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
            <h1 style={styles.name}>{store.provider.detail.name}</h1>
          </Tooltip>
        </div>
      )
    return (
      <Template>
        <div style={styles.root}>
          <Paper style={styles.paper}>
            {name}
            <div style={styles.id}>
              id: {store.provider.detail.id}
            </div>
          </Paper>
        </div>
      </Template>
    )
  }
}


ProviderDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}


export default ProviderDetail
