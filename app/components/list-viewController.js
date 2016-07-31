import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import uuid from 'node-uuid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import FormCpt from './article-form';
import ArticleCardCpt from './article';


export default class ListVCtrl extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*ask for localStore */
    this.props.getAllArticles();
  }

  addNewArticle({title, author, copyright, content}) {
    this.props.addArticle({
      title,
      author,
      copyright,
      content, 
      id: uuid.v1(),
      date: new Date().toString()
    });
  }

  render() {
    const { list, showMock, addArticle, deleteArticle } = this.props;    
    console.log(...this.props)
    return (
      <MuiThemeProvider>
        <div>
          <h4>this is where the larticle ist will be</h4>
        
          {/*<button onClick={showMock}>show mock list</button>*/}
          {list.map(item => item 
            ? <ArticleCardCpt 
                key={item.id}  delete={deleteArticle.bind(this, item.id)} 
                {...item} />
            : null
          )}

          <FormCpt handleSubmit={this.addNewArticle.bind(this)}/>

        </div>  
      </MuiThemeProvider>
    );  
  }

}