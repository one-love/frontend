import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

// Components
import Paper from '@material-ui/core/Paper'

import store from 'store'
import Template from 'templates/default'
import styles from './styles'


@observer
class ClusterList extends React.Component {
  componentWillMount() {
    store.title.title = 'Cluster Detail'
    store.cluster.fetch(this.props.match.params.id)
  }

  render() {
    return (
      <Template>
        <Paper style={styles.root}>
          <div>
            {store.cluster.detail.id}
          </div>
          <div>
            {store.cluster.detail.name}
          </div>
        </Paper>
      </Template>
    )
  }
}


ClusterList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}


export default ClusterList
