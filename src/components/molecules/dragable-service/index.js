import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './item-types';


const serviceSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      window.alert(`You dropped ${item.id} into ${dropResult.name}!`);
    }
  },
};


const DragableService = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
  },

  render() {
    const { connectDragSource } = this.props;
    const { name, id } = this.props;
    return (
      connectDragSource(
        <div>{name}: {id}</div>
      )
    );
  },
});


/* eslint-disable new-cap */
export default DragSource(ItemTypes.SERVICE, serviceSource, (connect, monitor) => ({
  /* eslint-enable */
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DragableService);
