import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class ListVCtrl extends Component {
  constructor(props) {
    super(props);
    this.articleId = 0; //move to store later
  }

 /* componentDidMount() {
    this._articleName.focus();
    console.log(this._articleName)
  }*/

  addNewArticle() {
    console.log(this.refs.articleName.value)
    this.props.addArticle({
      name: this.refs.articleName.value, 
      id: ++this.articleId
    });
  }

  render() {
    const { list, showMock, addArticle } = this.props;

    return <div>
      <h4>this is where the larticle ist will be</h4>
    
      <button onClick={showMock}>show mock list</button>
      {list.map(item => item 
        ? <p key={item.id}>{item.name}</p>
        : null
      )}

      <p>
        <button onClick={e => this.addNewArticle()}>
                add item
        </button>
        ||
        <input type="text" ref="articleName"/>
      </p>
  </div>
  }

}