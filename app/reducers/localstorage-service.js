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

  getArticle(id) { }

  set article(article) {
    this._storage.setItem(article.id, JSON.stringify(article));
  }

  removeArticle(id) {
    this._storage.removeItem(id)
  }
}

export default new StoreService(/*window*/localStorage);


const STORAGE = window.localStorage;

class StorageService {
  constructor(namespace) {
    //set namespace 
    this._ns = namespace;
    
    //load data form localstorage
    var data = JSON.parse(STORAGE.getItem(this._ns));
    // set public _data on service state  
    this._data = !!data ? data : []; 
    /*synch with storage*/
    if (!data) {
      /*write an empty array*/
      this.synchronize();
    }  

  }

  synchronize() {// ovewrite the same namespace every time...
    STORAGE.setItem(this._ns, JSON.stringify(this._data));
  }

  getAll() {
    return this._data;
  }

  addItem(item) {
    this._data = this._data.concat([item]);
    this.synchronize();
  }

  deleteItem(id) {
    this._data = this._data.filter(item => item.id != id);
    this.synchronize();
  }

  editItem(itemObj) {
    this._data = this._data
      .filter(item => item.id != itemObj.id)
      .push(itemObj);
    this.synchronize();  
  }
}

class ArticleService extends StorageService {
  constructor(namespace) {
    super(namespace);
  }
}

export const articleService = new ArticleService('articles');



