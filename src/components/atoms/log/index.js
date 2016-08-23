import styles from './styles.js';
import radium from 'radium';
import React from 'react';

function Log(props) {
  return (
    <div style={styles.provisions}>
      {props.children}
    </div>
  );
}


Log.propTypes = {
  children: React.PropTypes.node,
};


export default radium(Log);
