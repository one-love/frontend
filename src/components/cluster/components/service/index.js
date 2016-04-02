import React from 'react';
import { Link } from 'react-router';

const ServiceComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    clusterId: React.PropTypes.string,
    serviceId: React.PropTypes.string,
    username: React.PropTypes.string,
  },

  render() {
    const index = (
      <div>
        <Link to={`/services/${this.props.serviceId}`}>
        {this.props.name}
        </Link>
        <Link to={
          `/clusters/${this.props.clusterId}/${this.props.username}/${this.props.name}/provision`
                 }
        >
          Provision
         </Link>

        <Link to={
          `/clusters/${this.props.clusterId}/${this.props.username}/${this.props.name}/remove`
                 }
        >
          Remove
        </Link>
      </div>
    );
    return index;
  },
});

export default ServiceComponent;
