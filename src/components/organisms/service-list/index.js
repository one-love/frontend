import React from 'react';
import { connect } from 'react-redux';
import DragableService from '../../molecules/dragable-service';
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
        <h1>Services</h1>
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
