import React from 'react';
import { connect } from 'react-redux';
import actions from '../../pages/service-list/actions';
import store from '../../../store';


const mapStateToProps = state => {
  const data = {
    services: state.serviceList.services,
    status: state.serviceList.status,
  };
  return data;
};


const ServiceList = React.createClass({
  propTypes: {
    services: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      services: [],
    };
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  render() {
    return (
      <div>
        {
          this.props.services.map(service => (
            <div key={service.id}>
              {service.name}
            </div>
          ))
        }
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(ServiceList);
