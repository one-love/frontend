import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Template from 'templates/default'
import errorActions from 'templates/empty/actions'
import titleActions from 'templates/default/actions'
import actions from './actions'


const mapStateToProps = (state) => ({
  users: state.userList.data,
  error: state.userList.error,
  status: state.userList.status,
})


export class UserList extends Component {
  componentWillMount() {
    this.props.requestTitle('User List')
    this.props.requestUserList()
  }

  componentWillReceiveProps(nextProps) {
    if (Number.isInteger(nextProps.status)) {
      if (nextProps.status >= 400) {
        this.props.requestError(nextProps.error)
      }
    }
  }

  render() {
    const users = this.props.users.map(user => (
      <ListItem dense button key={user.id}>
        <Avatar src={user.avatar} />
        <ListItemText primary={user.email} />
      </ListItem>
    ))
    return (
      <Template secure>
        <List>
          {users}
        </List>
      </Template>
    )
  }
}


UserList.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
  requestUserList: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })),
  error: PropTypes.string,
  status: PropTypes.number,
}


UserList.defaultProps = {
  users: [],
}


export default connect(
  mapStateToProps,
  { ...errorActions, ...titleActions, ...actions },
)(
  UserList,
)
