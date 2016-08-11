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
    console.log(this.props)
    this.props.getAllArticles();
  }

  addNewArticle({title, author, copyright, content}) {
    this.props.addArticle({
      title,
      author,
      copyright,
      content, 
      id: uuid.v1(), /*generated on server/backend*/
      date: new Date().toString()
    });
  }

  renderArticleList() {
    const { list, deleteArticle } = this.props
    if (list && list.length) {
      return list.map(item => item 
        ? <ArticleCardCpt 
            key={item.id}  
            onDelete={deleteArticle.bind(this, item.id)} 
            {...item} />
        : null)
    
    } else {
      return <span>----replace with article list----</span>
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h4>Rendering articles....</h4>
          
          {this.renderArticleList()}

          <FormCpt handleSubmit={this.addNewArticle.bind(this)}/>

        </div>  
      </MuiThemeProvider>
    );  
  }

}