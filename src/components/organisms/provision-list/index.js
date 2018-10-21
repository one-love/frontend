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
  provisionList: state.provisionList.result,
})


export class ProvisionList extends Component {
  componentWillMount() {
    this.props.requestProvisionList()
  }

  render() {
    const styles = this.props.theme
    return (
      <Badge badgeContent={this.props.provisionList.total} color="primary">
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
              <Button size="small">Explore</Button>
            </Link>
          </CardActions>
        </Card>
      </Badge>
    )
  }
}


ProvisionList.propTypes = {
  theme: PropTypes.shape().isRequired,
  requestProvisionList: PropTypes.func.isRequired,
  provisionList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    pages: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
}


ProvisionList.defaultProps = {
  provisionList: {
    data: [],
    pages: 0,
    total: 0,
  },
}


export default connect(mapStateToProps, actions)(withTheme()(ProvisionList))
