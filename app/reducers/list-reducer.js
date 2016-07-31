import { SHOW_MOCK , ADD_ART, GET_ALL, DEL_ART } from '../actions/list-actions';

function getLocalStorage() {
  const state = [];
  for(let key in localStorage) {
    state.push(JSON.parse(localStorage.getItem(key)));
  }
  return state;
}


export default function listReducer(state=[], action) {

  if (action.type == SHOW_MOCK) return [{title: 'test', id: 0}];
  if (action.type == ADD_ART) {
    //?? asynch
    localStorage.setItem(action.payload.id, JSON.stringify(action.payload));
    /* return all local storage items...*/
    return getLocalStorage();
  }

  if (action.type == DEL_ART) {
    localStorage.removeItem(action.payload); //??asynch
    /* return all remaining localstorage items*/
    return getLocalStorage();
  }
  
  if (action.type == GET_ALL) return getLocalStorage();

  return state;
}