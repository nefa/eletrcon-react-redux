import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FormCpt from './article-form';

export default class ListVCtrl extends Component {

  constructor(props) {
    super(props);
    this.articleId = 0; //move to store later
    this.copyright = "";
  }

  addNewArticle({title, author, copyright, content}) {
    console.log(title, copyright);

    this.props.addArticle({
      title,
      author,
      copyright, 
      id: ++this.articleId,
      date: new Date()
    });
  }

  render() {
    const { list, showMock, addArticle } = this.props;
    
    return <MuiThemeProvider>
    <div>
      <h4>this is where the larticle ist will be</h4>
    
      <button onClick={showMock}>show mock list</button>
      {list.map(item => item 
        ? <p key={item.id}>{item.title}-{item.copyright}-{item.author}</p>
        : null
      )}

      <FormCpt handleSubmit={this.addNewArticle.bind(this)}/>

    </div>  
    </MuiThemeProvider>
  }

}