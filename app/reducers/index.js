import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import listReducer from './list-reducer';

const rootReducer = combineReducers({
  counter,
  listReducer,
  routing
});

export default rootReducer;
