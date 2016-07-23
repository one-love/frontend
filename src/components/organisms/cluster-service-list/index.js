import React from 'react';
import { Link } from 'react-router';
import { DropTarget } from 'react-dnd';
import Service from '../../molecules/service';
import List from '../../molecules/transition-appear';
import removeActions from './actions/remove';
import ItemTypes from '../../molecules/dragable-service/item-types';


const clusterTarget = {
  drop() {
    return {
      name: 'Cluster',
    };
  },
};


const ClusterServiceList = React.createClass({
  propTypes: {
    services: React.PropTypes.array,
    children: React.PropTypes.node,
    clusterId: React.PropTypes.string.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    isOver: React.PropTypes.bool.isRequired,
    canDrop: React.PropTypes.bool.isRequired,
  },

  getDefaultProps() {
    return {
      services: [],
    };
  },

  render() {
    const clusterUrl = `clusters/${this.props.clusterId}`;
    const serviceContent = this.props.services.map(service => {
      const url = `${clusterUrl}/services/${service.id}/provision`;
      const iconId = `${clusterUrl}/services/${service.id}`;
      return (
        <Link to={url} key={service.id}>
          <Service
            name={service.name}
            iconId={iconId}
            close={removeActions.confirm}
          />
        </Link>
      );
    });
    const content = this.props.services ? serviceContent : this.props.children;
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return (
      connectDropTarget(
        <div style={{ backgroundColor }}>
          <h3>Services</h3>
          <List>
            {content}
          </List>
        </div>
      )
    );
  },
});


/* eslint-disable new-cap */
export default DropTarget(ItemTypes.SERVICE, clusterTarget, (connect, monitor) => ({
  /* eslint-enable */
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(ClusterServiceList);
