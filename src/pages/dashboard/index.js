import React from 'react'
import Template from 'templates/default'
import ClusterList from 'components/organisms/cluster-list'
import ProvisionList from 'components/organisms/provision-list'
import ServiceList from 'components/organisms/service-list'
import store from 'store'
import styles from './styles'


export class Dashboard extends React.Component {
  componentWillMount() {
    store.title.title = 'Dashboard'
  }

  render() {
    return (
      <Template secure>
        <div style={styles.root}>
          <ClusterList />
          <ServiceList />
          <ProvisionList />
        </div>
      </Template>
    )
  }
}


export default Dashboard
