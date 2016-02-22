import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import DevTools from './DevTools';


const Root = React.createClass({
  propTypes: {
    store: PropTypes.object,
  },

  render() {
    const { store } = this.props;
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
