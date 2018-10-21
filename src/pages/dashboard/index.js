import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import Template from 'templates/default'
import ClusterList from 'components/organisms/cluster-list'
import ProviderList from 'components/organisms/provider-list'
import ServiceList from 'components/organisms/service-list'
import titleActions from 'templates/default/actions'
import getStyles from './styles'


const mapStateToProps = () => ({})


export class Dashboard extends Component {
  componentWillMount() {
    this.props.requestTitle('Dashboard')
  }

  render() {
    const styles = getStyles(this.props.theme, 3)
    return (
      <Template secure>
        <div style={styles.root}>
          <ClusterList />
          <ProviderList />
          <ServiceList />
        </div>
      </Template>
    )
  }
}


Dashboard.propTypes = {
  requestTitle: PropTypes.func.isRequired,
  theme: PropTypes.shape().isRequired,
}


export default connect(mapStateToProps, titleActions)(withTheme()(Dashboard))
