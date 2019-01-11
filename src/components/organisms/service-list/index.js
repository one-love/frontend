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


export class ServiceList extends Component {
  componentWillMount() {
    store.service.fetchAll()
  }

  render() {
    const styles = this.props.theme
    return (
      <Badge badgeContent={store.service.list.total} color="primary">
        <Card style={styles.overrides.Execution}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Services
            </Typography>
            <Typography color="textSecondary">
              Groups of services
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/services" style={styles.overrides.noDecorationLink}>
              <Button size="small">Explore</Button>
            </Link>
          </CardActions>
        </Card>
      </Badge>
    )
  }
}


ServiceList.propTypes = {
  theme: PropTypes.shape().isRequired,
}


export default withTheme()(ServiceList)
