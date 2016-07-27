import React, {Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();
  

const copyrightOptions = [
  {value: 'All Rights Reserved', label: 'All Rights Reserved'},
  {value: 'Some Rights Reserved', label: 'Some Rights Reserved'},
  {value: 'No Rights Reserved', label: 'No Rights Reserved'}
];

export default class FormCpt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      content: '',
      copyright: copyrightOptions[0].value
    }
  }

  changeContent(evt) {
    this.setState({content: evt.target.value})
  }

  changeAuthor(evt) {
    this.setState({author: evt.target.value});
  }

  changeTitle(evt) {
    this.setState({title: evt.target.value});
  }

  changeCopyright(evt, index, value) {
    this.setState({copyright: value});
  }

  handleSubmit(evt) {
    evt.preventDefault()

    this.props.handleSubmit(this.state);

  }

  render() {
    console.log(this.state)
    const buttonStyle = {
      margin: 12
    }
    return <form onSubmit={this.handleSubmit.bind(this)}>
      
      <TextField name="author" 
        hintText="Author Name"
        value={this.state.author}
        onChange={this.changeAuthor.bind(this)}/>
      <br />

      <TextField name="articleTitle" 
        hintText="Title"
        value={this.state.title}
        onChange={this.changeTitle.bind(this)}/>
      <br />
        
      <TextField name="content"
        hintText="Write your content here..."
        multiLine={true} rows={3}
        value={this.state.content}
        onChange={this.changeContent.bind(this)} />
      <br /> 

      <SelectField value={this.state.copyright}
        autoWidth={true}
        onChange={this.changeCopyright.bind(this)} >

        {copyrightOptions.map((item, idx) => <MenuItem 
          key={idx}
          value={item.value} primaryText={item.label}/>)}        
      
      </SelectField> 
      <br />
      <RaisedButton type="submit" label="Send" style={buttonStyle} />

    </form>
  }
}






