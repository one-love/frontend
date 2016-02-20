import React from 'react';
import isomorphicFetch from 'isomorphic-fetch';
import { getAuthToken, isLoggedIn } from '../components/auth/utils';


/**
 * Pass store as props
 *
 * @param component - component that will receive props
 * @param props - props to pass to component as state
 */
export function wrapComponent(component, props) {
  return React.createClass({
    propTypes: {
      children: React.PropTypes.node,
    },

    render() {
      return React.createElement(component, props, this.props.children);
    },
  });
}

export function fetch(args) {
  const {
    url,
    body,
    method,
    contentType,
  } = args;
  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method: method ? method : 'get',
    headers: {
      Accept: 'application/json',
      Authorization: `JWT ${getAuthToken()}`,
    },
  };
  if (!isLoggedIn()) {
    delete newargs.headers.Authorization;
  }
  if (contentType) {
    newargs.headers['Content-Type'] = contentType;
  }
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
