import Log from '../../atoms/log';
import styles from './styles.js';
import radium from 'radium';
import React from 'react';

const Provision = React.createClass({
  propTypes: {
    provision: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      provision: {
        logs: [],
      },
    };
  },

  render() {
    const status = this.props.provision.status ? this.props.provision.status.toLowerCase() : '';
    return (
      <div>
        <h1 style={styles[status]}>Provision</h1>
        <Log>
          {
            this.props.provision.logs.map((log) => (
              <div key={log.timestamp} style={styles[log.status]}>
                [{log.host}] {log.task}{log.log ? `: ${log.log}` : ''}
              </div>
            ))
          }
        </Log>
      </div>
    );
  },
});


export default radium(Provision);
