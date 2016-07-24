import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import list from './list';

const rootReducer = combineReducers({
  counter,
  list,
  routing
});

export default rootReducer;
