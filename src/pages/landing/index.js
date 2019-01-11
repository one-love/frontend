import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import store from 'store'


export class Landing extends Component {
  componentWillMount() {
    store.title.title = 'Landing'
  }

  render() {
    return (
      <Template>
        <Button variant="contained">
          Landing
        </Button>
      </Template>
    )
  }
}


export default Landing
