import React from 'react';
import { Link } from 'react-router';
import { DropTarget } from 'react-dnd';
import { connect as reduxConnect } from 'react-redux';
import Service from '../../molecules/cluster-service';
import List from '../../molecules/transition-appear';
import actions from '../../molecules/dragable-service/actions/add';
import ItemTypes from '../../molecules/dragable-service/item-types';


const clusterTarget = {
  drop() {
    return {
      name: 'Cluster',
    };
  },
};


const mapStateToProps = (state) => ({
  addService: state.clusterServiceAdd.service,
});


const ClusterServiceList = React.createClass({
  propTypes: {
    services: React.PropTypes.array,
    addService: React.PropTypes.object,
    children: React.PropTypes.node,
    clusterId: React.PropTypes.string.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    isOver: React.PropTypes.bool.isRequired,
    canDrop: React.PropTypes.bool.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      services: [],
    };
  },

  getInitialState() {
    return {
      services: [],
    };
  },

  componentWillReceiveProps(nextProps) {
    const services = nextProps.services;
    if (nextProps.addService) {
      services.push(nextProps.addService);
      this.props.dispatch(actions.reset());
    }
    if (services !== this.state.services) {
      this.setState({ services });
    }
  },

  render() {
    const clusterUrl = `clusters/${this.props.clusterId}`;
    const serviceContent = this.state.services.map(service => {
      const url = `${clusterUrl}/services/${service.id}/provision`;
      return (
        <Link to={url} key={service.id}>
          <Service
            name={service.name}
            serviceId={service.id}
            clusterId={this.props.clusterId}
          />
        </Link>
      );
    });
    const content = this.state.services ? serviceContent : this.props.children;
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


// eslint-disable-next-line new-cap
const ClusterServiceDNDList = DropTarget(ItemTypes.SERVICE, clusterTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(ClusterServiceList);
const ClusterServiceConnect = reduxConnect(mapStateToProps)(ClusterServiceDNDList);


export default ClusterServiceConnect;
