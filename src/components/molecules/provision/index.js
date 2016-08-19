import React from 'react';
import cssModules from 'react-css-modules';
import Log from '../../atoms/log';
import styles from './styles.css';


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
        <h1 styleName={status}>Provision</h1>
        <Log>
          {
            this.props.provision.logs.map((log) => (
              <div key={log.timestamp} styleName={log.status}>
                [{log.host}] {log.task}{log.log ? `: ${log.log}` : ''}
              </div>
            ))
          }
        </Log>
      </div>
    );
  },
});


export default cssModules(Provision, styles);
