import React from 'react';
import Paper from 'material-ui/Paper';
import store from '../../../store';


const Icon = React.createClass({
  propTypes: {
    alt: React.PropTypes.string,
    name: React.PropTypes.string,
    img: React.PropTypes.string,
    path: React.PropTypes.string,
    iconId: React.PropTypes.string,
    close: React.PropTypes.func,
  },

  handleClose(event) {
    event.preventDefault();
    store.dispatch(this.props.close(this.props.iconId));
  },

  render() {
    const styles = {
      paper: {
        height: '120px',
        width: '120px',
        borderRadius: '10px',
      },

      img: {
        height: '80px',
        width: '90px',
      },

      close: {
        display: 'block',
        marginLeft: '107px',
      },

      content: {
        display: 'table',
        margin: '0 auto',
        text: {
          textAlign: 'center',
        },
      },
    };
    let name = 'IconName';
    if (this.props.name) {
      name = this.props.name;
    }
    let content = (
      <div style={styles.content}>
        <img
          src={this.props.img}
          alt={this.props.alt ? this.props.alt : 'icon'}
          style={styles.img}
        />
        <div style={styles.content.text}>
          {name}
        </div>
      </div>
    );
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        {content}
      </Paper>
    );
  },
});


export default Icon;
