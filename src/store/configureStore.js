let configureStore;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod');
} else {
  configureStore = require('./configureStore.dev');
}


module.exports = configureStore;
