import React from 'react';
import Application from './components/detail';

const ApplicationList = React.createClass({
  propTypes: {
    applications: React.PropTypes.array,
    serviceId: React.propTypes.object,
  },

  render() {
    console.log(this.props.applications);
    const index = (
      <div>
        <h2>My applications:</h2>
        <ul>
          {
            this.props.applications.map(
              (application) =>
                <Application
                  key={application.id}
                  applicationName={application.name}
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
