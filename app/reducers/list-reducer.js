import { SHOW_MOCK , ADD_ART, GET_ALL, DEL_ART } from '../actions/list-actions';
import storeService from './localstorage-service'; 


console.log(storeService);
console.log(storeService.getAll);


export default function listReducer(state=[], action) {

  if (action.type == ADD_ART) {
    storeService.article = action.payload;
    return storeService.getAll;
  }

  if (action.type == DEL_ART) {
    storeService.removeItem(action.payload); //??asynch
    return storeService.getAll;
  }

  if (action.type == GET_ALL) return storeService.getAll;

  return state;
}
