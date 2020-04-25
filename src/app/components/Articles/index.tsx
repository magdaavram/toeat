import React from 'react';
import styled from 'styled-components';
import ArticleThumbnail from '../ArticleThumbnail';
import getArticles from '../../api/recipes';

const Container = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: space-between;
  gap: 54px 36px;
  margin-top: 18px;
  padding-top: 27px;
`;

const Articles = () => {
  const articles = getArticles();
  const articlesList = articles.map((article, index) => (
    <ArticleThumbnail
      imageUrl={article.imageUrl}
      title={article.title}
      duration={article.duration}
      difficultyLevel={article.difficultyLevel}
      key={`article-${index}`}
    />
  ));

  return <Container>{articlesList}</Container>;
};

export default Articles;
