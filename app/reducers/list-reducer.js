import { SHOW_MOCK , ADD_ART, GET_ALL, DEL_ART } from '../actions/list-actions';

/*using an intermediary service to abstract the localStorage api*/
import storeService from './localstorage-service'; 


console.log(storeService);
console.log(storeService.getAllArticles());


export default function listReducer(state=[], action) {
  /* simply using a set of CRUD actions*/

  if (action.type == ADD_ART) {
    storeService.article = action.payload;
    return storeService.getAllArticles(); //R
  }

  if (action.type == DEL_ART) {
    storeService.removeArticle(action.payload); //D
    return storeService.getAllArticles();
  }

  if (action.type == GET_ALL) return storeService.getAllArticles();//R

  return state;
}
