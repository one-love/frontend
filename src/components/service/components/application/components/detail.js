import React from 'react';
import { Link } from 'react-router';


const Application = React.createClass({
  propTypes: {
    applicationName: React.PropTypes.string,
    applicationRole: React.PropTypes.string,
    serviceId: React.PropTypes.string,
  },


  render() {
    const serviceId = this.props.serviceId;
    const applicationName = this.props.applicationName;
    const applicationRole = this.props.applicationRole;
    if (this.props.applicationName === undefined) {
      return <div></div>;
    }
    const index = (
      <div>
        <h2>Application: {applicationName} {applicationRole}</h2>
        <Link to={`/services/${serviceId}/applications/${applicationName}/edit/`}>
          Edit
        </Link>
        <Link to={`/services/${serviceId}/applications/${applicationName}/remove/`}>
          Remove
        </Link>
      </div>
    );
    return index;
  },
});

export default Application;
