import React from 'react';
import Application from './components/detail';

const ApplicationList = React.createClass({
  propTypes: {
    applications: React.PropTypes.array,
    serviceId: React.PropTypes.string,
  },

  render() {
    const index = (
      <div>
        <h2>My applications:</h2>
        <ul>
          {
            this.props.applications.map(
              (application) =>
                <Application
                  key={application.name}
                  applicationName={application.name}
                  applicationRole={application.galaxy_role}
                  serviceId={this.props.serviceId}
                />
            )
          }
        </ul>
      </div>
    );
    return index;
  },
});

export default ApplicationList;
