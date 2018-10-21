import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import actions from './actions'


const mapStateToProps = (state) => ({
  serviceList: state.serviceList.result,
})


export class ServiceList extends Component {
  componentWillMount() {
    this.props.requestServiceList()
  }

  render() {
    const styles = this.props.theme
    return (
      <Badge badgeContent={this.props.serviceList.total} color="primary">
        <Card style={styles.overrides.Execution}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Services
            </Typography>
            <Typography color="textSecondary">
              Groups of hosts
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
  requestServiceList: PropTypes.func.isRequired,
  serviceList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    pages: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
}


ServiceList.defaultProps = {
  serviceList: {
    data: [],
    pages: 0,
    total: 0,
  },
}


export default connect(mapStateToProps, actions)(withTheme()(ServiceList))
