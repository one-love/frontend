import React from 'react';
import Application from '../../molecules/application';
import List from '../../molecules/transition-appear';
import store from '../../../store';
import actions from './actions';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  applications: state.applicationList.applications,
  status: state.applicationList.status,
});

const ApplicationList = React.createClass({
  propTypes: {
    applications: React.PropTypes.array,
    status: React.PropTypes.string,
    serviceId: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.serviceId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.applications === undefined) {
      return <div></div>;
    }
    const applications = (
      <div>
        {
          this.props.applications.map(
            application =>
              <Application key={application.id} name={application.name} path="" />
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
