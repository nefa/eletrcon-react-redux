import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

const chip = {margin: 4}

const ArticleCardCpt = ({author, date, content, title, copyright, id, onDelete}) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={"by "+ author+ ' added '+ date}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>{content}</CardText>

    <RaisedButton label="DELETE"
      backgroundColor="red"  
      onClick={onDelete.bind(this)} />  
    
    <br />
    <Chip style={chip}>{copyright}</Chip>
  </Card>);

export default ArticleCardCpt;

