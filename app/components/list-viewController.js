import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class ListVCtrl extends Component {

  render() {
    console.log(this.props, this)
    const { list, showMock, addArticle } = this.props;
    return (<div>
      <h4>this is where the larticle ist will be</h4>
      <button onClick={showMock}>show mock list</button>

      {list.map(item => {
        return item 
          ? <p key={item.id}>{item.name}</p>
          : null;
      })}

      <p>
        <button onClick={addArticle.bind(this, {
          name: this._articleName, id: 1
        })}>
                add item
        </button>
        ||
        <input type="text" ref={name => this._articleName = name}/>
      </p>
    </div>)
  }

}