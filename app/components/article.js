import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


const ArticleCardCpt = ({id, date, author, title, content, copyright}) => (
  <Card>
    <CardHeader
      title={title}
      subtitle={"by "+ author+ ' added '+ date}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>{content}</CardText>
    
    <p>{copyright}</p>
  </Card>
);

export default ArticleCardCpt;

