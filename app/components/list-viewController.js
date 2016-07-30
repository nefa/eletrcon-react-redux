import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FormCpt from './article-form';
import ArticleCardCpt from './article';


export default class ListVCtrl extends Component {

  componentDidMount() {
    /*ask for localStore */
    /*then dispatch all or one by one...*/
  }


  addNewArticle({title, author, copyright, content}) {
    this.props.addArticle({
      title,
      author,
      copyright,
      content, 
      id: ++this.articleId,
      date: new Date()
    });
  }

  render() {
    const { list, showMock, addArticle } = this.props;    
    console.log(...this.props)
    return (
      <MuiThemeProvider>
        <div>
          <h4>this is where the larticle ist will be</h4>
        
          {/*<button onClick={showMock}>show mock list</button>*/}
          {list.map(item => item 
            ? <ArticleCardCpt 
                key={item.id}  {...item} />
            : null
          )}

          <FormCpt handleSubmit={this.addNewArticle.bind(this)}/>

        </div>  
      </MuiThemeProvider>
    );  
  }

}