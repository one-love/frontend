import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Main from './main';
import DevTools from './dev-tools';


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
