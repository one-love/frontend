import { createStore } from 'redux';


function reducer(state, action) {
  console.log('reducer was called with state', state, 'and action', action);
}


export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
