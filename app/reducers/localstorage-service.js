/*this is a basic stripped class that should be replaced once a
real adaptor to a particluar storage is adopted*/

class StoreService {
  constructor(/*custom local service*/storage) {
    /*this particular approach polutes the localStorage namespace,
    so this is an unscalable, unrealistic approach to a storage
    service*/
    this._storage = storage;
  }

  getAllArticles() {
    /* get all elements*/
    return Object
      .keys(this._storage)
      .map(key => JSON.parse(this._storage.getItem(key)))
  }

  getArticle(/*id base*/ id) { }

  set article(article) {
    this._storage.setItem(article.id, article);
  }

  removeArticle(id) {
    this._storage.removeItem(id)
  }
}

export default new StoreService(/*window*/localStorage);
