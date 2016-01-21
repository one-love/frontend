import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routeReducer, syncHistory } from 'redux-simple-router';
import thunk from 'redux-thunk';
import oneloveReducer from './actions';


const reducer = combineReducers({
  oneloveReducer,
  routeReducer,
});

export default function configureStore(initialState = {}, history) {
  const routerMiddleware = syncHistory(history);
  const middleware = applyMiddleware(thunk, routerMiddleware);
  const store = middleware(createStore)(reducer, initialState);
  return store;
}
