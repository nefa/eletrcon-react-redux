export const SHOW_MOCK = 'SHOW_MOCK';
export const ADD_ART = 'ADD_ARTICLE';
export const GET_ALL = 'GET_ALL_ARTICLES';
export const DEL_ART = 'DELETE_ARTICLE';


export function addArticle(item) {
  return {
    type: ADD_ART,
    payload: item
  };
}

export function deleteArticle(id) {
  return {
    type: DEL_ART,
    payload: id
  }
}

export function getAllArticles() {
  return {type: GET_ALL};
}