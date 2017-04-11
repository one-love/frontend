import React from 'react';
import { connect } from 'react-redux';
import DragableService from '../../molecules/dragable-service';
import actions from '../../pages/service-list/actions';

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
    get: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      services: [],
    };
  },

  componentWillMount() {
    this.props.get();
  },

  render() {
    return (
      <div>
        <h2>Services</h2>
        {
          this.props.services.map(service => (
            <DragableService key={service.id} id={service.id} name={service.name} />
          ))
        }
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(ServiceList);
