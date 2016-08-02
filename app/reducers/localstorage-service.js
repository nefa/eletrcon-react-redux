class StoreService {
  constructor(/*custom local service*/storage) {
    this._storage = storage;
  }

  get getAll() {
    /* get all elements*/
    return Object
      .keys(this._storage)
      .map(key => JSON.parse(this._storage.getItem(key)))
  }

  get article() { }

  set article(article) {
    this._storage.setItem(article.id, article);
  }

  removeItem(id) {
    this._storage.removeItem(id)
  }
}

export default new StoreService(/*window*/localStorage);
