import React from 'react';
import { Link } from 'react-router';
import Service from '../../molecules/service';
import List from '../../molecules/transition-appear';
import removeActions from './actions/remove';


const ClusterServiceList = React.createClass({
  propTypes: {
    services: React.PropTypes.array,
    children: React.PropTypes.node,
    clusterId: React.PropTypes.string.isRequired,
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
    return (
      <div>
        <h3>Services</h3>
        <List>
          {content}
        </List>
      </div>
    );
  },
});

export default ClusterServiceList;
