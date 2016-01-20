import React from 'react';

export function wrapComponent(Component, props) {
  return React.createClass({
    render() {
      return React.createElement(Component, props);
    },
  });
}
