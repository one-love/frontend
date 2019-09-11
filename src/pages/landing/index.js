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
          <div style={styles.content}>
            <div style={styles.title}>
              <h1>Welcome to One Love</h1>
            </div>
            <div style={styles.h3}>
              <h3>Web interface for Ansible provisioning!</h3>
            </div>
              <Button variant="contained" color="primary">
                Learn more
              </Button>
          </div>
          <div style={styles.secondiv}>
            <div style={styles.centercontent}>
              <div style={styles.contentgrid1}>
			    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			    Cras sollicitudin, lectus eu congue sollicitudin, urna 
			    erat imperdiet lacus, et maximus erat enim sed massa. 
			    Nullam magna ante, ultrices id ullamcorper vitae, 
			    tincidunt vitae dolor. Mauris condimentum vehicula accumsan. 
			    Nullam tristique mollis est, eget pharetra sem euismod at.
			    <div style={styles.button2}>
			      <Button variant="contained" color="primary">
                    checkout our documentation
                  </Button>
                </div>
              </div>
			</div>
			<div style={styles.centercontent}>
              <div style={styles.contentgrid2} />
			</div>
			</div>
        </div>
      </Template>
    )
  }
}


export default Landing
