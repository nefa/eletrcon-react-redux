import { SHOW_MOCK , ADD_ART } from '../actions/list-actions';

export default function list(state= [], action) {
  console.log("...list reducer invoked")
  if (action.type == SHOW_MOCK) 
    return [{name: 'test', id: 0}]

  if (action.type == ADD_ART)
    return state.concat([action.payload]);

  return state;
}