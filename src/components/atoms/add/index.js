import React from 'react';
import AddToQueue from 'material-ui/svg-icons/av/add-to-queue';


const styles = {
  icon: {
    position: 'absolute',
    height: '100px',
    width: '100px',
    right: 0,
    bottom: 0,
    margin: '0 10px 20px 0',
    color: 'gray',
  },
};


function Add() {
  return (
    <AddToQueue style={styles.icon} />
  );
}


export default Add;
