import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import store from 'store'
import styles from './styles'


export class Landing extends Component {
  componentWillMount() {
    store.title.title = 'Landing'
  }

  render() {
    return (
      <Template style={{}}>
        <div style={styles.photo}>
          <Button variant="contained">
            Landing
          </Button>
        </div>
      </Template>
    )
  }
}


export default Landing
