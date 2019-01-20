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


export class ProvisionList extends Component {
  componentWillMount() {
    store.provision.fetchAll()
  }

  render() {
    const styles = this.props.theme
    return (
      <Badge badgeContent={store.provision.list.total} color="primary">
        <Card style={styles.overrides.Execution}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Provisions
            </Typography>
            <Typography color="textSecondary">
              Groups of provisions
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/provisions" style={styles.overrides.noDecorationLink}>
              <Button variant="outlined" size="small">Explore</Button>
            </Link>
          </CardActions>
        </Card>
      </Badge>
    )
  }
}


ProvisionList.propTypes = {
  theme: PropTypes.shape().isRequired,
}


export default withTheme()(ProvisionList)
