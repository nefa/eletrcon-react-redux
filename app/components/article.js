import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const ArticleCardCpt = ({id, date, author, title, content, copyright, delete}) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={"by "+ author+ ' added '+ date}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>{content}</CardText>

    <RaisedButton label="DELETE"
      backgroundColor="red"  />  
    
    <p>{copyright}</p>
  </Card>
);

export default ArticleCardCpt;

