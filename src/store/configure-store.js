let store;

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line
  store = require('./configure-store.prod');
} else {
  // eslint-disable-next-line
  store = require('./configure-store.dev');
}


export default store.default;
