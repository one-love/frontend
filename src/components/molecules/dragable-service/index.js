import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './item-types';
import store from '../../../store';
import actions from './actions/add';


const serviceSource = {
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },

  beginDrag(props) {
    return {
      id: props.id,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    const cluster = store.getState().clusterDetail.cluster;
    if (dropResult) {
      this.props.dispatch(actions.add(cluster.id, item.id));
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
    const { id } = this.props;
    return (
      connectDragSource(
        <div>{id}</div>
      )
    );
  },
});


// eslint-disable-next-line new-cap
export default DragSource(ItemTypes.SERVICE, serviceSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DragableService);
