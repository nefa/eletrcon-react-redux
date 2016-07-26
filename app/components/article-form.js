import React, {Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
    this.setState({author: evt.target.value})
  }

  changeCopyright(evt) {
    this.setState({copyright: evt.target.value})
  }

  render() {
    console.log(this.state)
    return <form>
      
      <TextField name="author" 
        hintText="Author Name"
        value={this.state.author}
        onChange={this.changeAuthor.bind(this)}/>
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
          value={idx} primaryText={item.value}/>)}        
      
      </SelectField>            

    </form>
  }
}






