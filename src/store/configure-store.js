/* eslint global-require: 0 */

export default function configureStore() {
  let store;
  if (process.env.NODE_ENV === 'production') {
    store = require('./configure-store.prod');
  } else {
    store = require('./configure-store.dev');
  }
  return store;
}
