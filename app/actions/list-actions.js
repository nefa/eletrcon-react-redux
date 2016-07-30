export const SHOW_MOCK = 'SHOW_MOCK';
export const ADD_ART = 'ADD_ARTICLE';

export function showMock() {
  return {
    type: SHOW_MOCK
  }
}

export function addArticle(item) {
  console.log(item);
  return {
    type: ADD_ART,
    payload: item
  }
}