import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Template from 'templates/default'
import store from 'store'


export class UserList extends Component {
  componentWillMount() {
    store.title.title = 'User List'
    store.user.fetchAll()
  }

  render() {
    console.log(store.user.list)
    const users = store.user.list.data.map(user => (
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


export default UserList
