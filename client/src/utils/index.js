import React from 'react';
import isomorphicFetch from 'isomorphic-fetch';


export function wrapComponent(Component, props) {
  return React.createClass({
    propTypes: {
      children: React.PropTypes.node,
    },

    render() {
      return React.createElement(Component, props, this.props.children);
    },
  });
}


export function fetch(url, body, method = 'get') {
  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return isomorphicFetch(url, newargs)
    .then(response => {
      const json = response.json();
      if (response.status >= 400) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return json;
    });
}
