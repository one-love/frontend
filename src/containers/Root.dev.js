import React from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import DevTools from './DevTools';
import store from '../store';


const Root = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
          <DevTools />
        </div>
      </Provider>
    );
  },
});

export default Root;
