import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const styles = {
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: '0 20px 40px 0',
  },
};


function Add() {
  return (
    <FloatingActionButton style={styles.icon}>
      <ContentAdd />
    </FloatingActionButton>
  );
}


export default Add;
