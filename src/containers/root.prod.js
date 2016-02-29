import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Main from './main';


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
        </div>
      </Provider>
    );
  },
});

export default Root;
