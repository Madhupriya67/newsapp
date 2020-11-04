const ArticleItem = (props) => {
    const { article } = props;
    return (
      <List.Item style={{ padding: 30 }}>
        <Grid>
          <Grid.Column
            width={11}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Header as="h3">{article.title}</Header>
            <List.Description style={{ margin: "20px 0" }}>
              {article.description}
            </List.Description>
            <List bulleted horizontal>
              <List.Item>
                <a href={article.url}>{article.source.name}</a>
              </List.Item>
              <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src={article.urlToImage} />
          </Grid.Column>
        </Grid>
      </List.Item>
    );
  };