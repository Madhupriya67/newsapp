import React from "react";
import { List } from "semantic-ui-react";

const ArticleItem = (props) => {
    const { article } = props;
    return <List.Item>{article.title}</List.Item>;
  };
const ArticleList = (props) => {
    props.articles.map((article) => (
        <List.Item key={article.title + index}>{article.title}
        <ArticleItem article={article} key={article.title + index} /></List.Item>
      ));
  return (
    <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
      {props.articles.map((article) => (
        <List.Item key={article.title}>{article.title}
        </List.Item>
      ))}
    </List>
  );
};

export default ArticleList;