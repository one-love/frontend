import { combineReducers } from 'redux';
import login from './components/pages/login/reducers';


const reducers = {
  login,
};


const rootReducer = combineReducers(reducers);

export default rootReducer;
