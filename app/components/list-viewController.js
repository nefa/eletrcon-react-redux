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

  addNewArticle() {
    console.log(this.refs.articleTitle.value)
    this.props.addArticle({
      title: this.refs.articleTitle.value,
      author: this.refs.author.value,
      copyright: this.copyright, 
      id: ++this.articleId,
      date: new Date()
    });
  }

  copyrightChange(c) {
    console.log(c)
    this.copyright = c.value;
  }

  render() {
    const { list, showMock, addArticle } = this.props;
    const copyrightOptions = [
      {value: 'All Rights Reserved', label: 'All Rights Reserved'},
      {value: 'Some Rights Reserved', label: 'Some Rights Reserved'},
      {value: 'No Rights Reserved', label: 'No Rights Reserved'}
    ]

    return <MuiThemeProvider>
    <div>
      <h4>this is where the larticle ist will be</h4>
    
      <button onClick={showMock}>show mock list</button>
      {list.map(item => item 
        ? <p key={item.id}>{item.title}-{item.copyright}-{item.author}</p>
        : null
      )}

      <FormCpt />

{/*      <div className="form">
        title: <input type="text" ref="articleTitle"/>
        <br />
        author: <input type="text" ref="author"/>
        <br />
        content: <textarea></textarea>
        <br />
        licence: 
        <Select name="slect-field"
          value={copyrightOptions[0].value}
          options={copyrightOptions}
          onChange={this.copyrightChange.bind(this)}
          />
        <br /> 
        <button onClick={e => this.addNewArticle()}>
                add item
        </button>
      </div>*/}
    </div>  
    </MuiThemeProvider>
  }

}