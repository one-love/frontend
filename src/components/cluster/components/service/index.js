import React from 'react';

const ServiceComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.string,
  },

  render() {
    const index = (
      <div>
        {this.props.name}
      </div>
    );
    return index;
  },
});

export default ServiceComponent;
