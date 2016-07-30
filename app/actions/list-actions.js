export const SHOW_MOCK = 'SHOW_MOCK';
export const ADD_ART = 'ADD_ARTICLE';
export const GET_ALL = 'GET_ALL_ARTICLES';

export function showMock() {
  return {type: SHOW_MOCK};
}

export function addArticle(item) {
  console.log(item);
  return {
    type: ADD_ART,
    payload: item
  };
}

export function getAllArticles() {
  return {type: GET_ALL};
}