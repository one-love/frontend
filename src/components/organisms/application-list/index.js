import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Application from '../../molecules/application';
import List from '../../molecules/transition-appear';
import actions from './actions';
import removeActions from '../../molecules/application/actions/remove';


const mapStateToProps = state => ({
  applications: state.applicationList.applications,
  status: state.applicationList.status,
});

const ApplicationList = React.createClass({
  propTypes: {
    applications: React.PropTypes.array,
    status: React.PropTypes.string,
    serviceId: React.PropTypes.string,
    dispatch: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      applications: [],
    };
  },

  componentWillMount() {
    this.props.dispatch(actions.get(this.props.serviceId));
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
  },

  render() {
    const applications = (
      <div>
        {
          this.props.applications.map(
            application => {
              const url = `/services/${this.props.serviceId}/applications/${application.name}`;
              return (
                <Link to={url} key={application.name}>
                  <Application
                    name={application.name}
                    serviceId={this.props.serviceId}
                    close={removeActions.confirm}
                  />
                </Link>
              );
            }
          )
        }
      </div>
    );
    const index = (
      <div>
        <h3>Applications: </h3>
        <List>
          {applications}
        </List>
      </div>
    );
    return index;
  },

});

export default connect(mapStateToProps, actions)(ApplicationList);
