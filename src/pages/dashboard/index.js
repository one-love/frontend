import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@material-ui/core/styles'
import Template from 'templates/default'
import ClusterList from 'components/organisms/cluster-list'
import ProvisionList from 'components/organisms/provision-list'
import ServiceList from 'components/organisms/service-list'
import store from 'store'
import getStyles from './styles'


export class Dashboard extends Component {
  componentWillMount() {
    store.title.title = 'Dashboard'
  }

  render() {
    const styles = getStyles(this.props.theme, 3)
    return (
      <Template secure>
        <div style={styles.root}>
          <ClusterList />
          <ProvisionList />
          <ServiceList />
        </div>
      </Template>
    )
  }
}


Dashboard.propTypes = {
  theme: PropTypes.shape().isRequired,
}


export default withTheme()(Dashboard)
