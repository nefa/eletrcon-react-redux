import { SHOW_MOCK } from '../actions/list-actions';

export default function list(state= [], action) {
  if (action.type == SHOW_MOCK) 
    return [{name: 'test', id: 00}]

  return state;
}