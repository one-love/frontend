import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import store from 'store'
import styles from './styles'


export class ProviderList extends Component {
  componentWillMount() {
    store.provider.fetchAll()
  }

  render() {
    return (
      <Badge
        badgeContent={store.provider.list.total}
        color="primary"
        style={styles.root}
      >
        <Card style={this.props.theme.overrides.Execution}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Providers
            </Typography>
            <Typography color="textSecondary">
              Groups of hosts
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/providers" style={this.props.theme.overrides.noDecorationLink}>
              <Button variant="outlined" size="small">Explore</Button>
            </Link>
          </CardActions>
        </Card>
      </Badge>
    )
  }
}


ProviderList.propTypes = {
  theme: PropTypes.shape().isRequired,
}


export default withTheme()(ProviderList)
