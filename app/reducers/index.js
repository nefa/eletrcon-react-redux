import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import list from './list-reducer';

const rootReducer = combineReducers({
  counter,
  list,
  routing
});

export default rootReducer;
