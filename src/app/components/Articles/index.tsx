import React from 'react';
import styled from 'styled-components';
import ArticleThumbnail from '../ArticleThumbnail';
import article1 from '../../assets/images/article1.png';
import article2 from '../../assets/images/article2.png';
import article3 from '../../assets/images/article3.png';
import article4 from '../../assets/images/article4.png';
import article5 from '../../assets/images/article5.png';
import article6 from '../../assets/images/article6.png';

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 27px;

  & > :nth-child(3n) {
    margin-right: 0;
  }

  &:after {
    content: '';
    display: block;
    margin-left: 32%;
  }
`;

const Articles = () => {
  return (
    <Container>
      <ArticleThumbnail
        image={{ url: article1 }}
        title={'Juicy Burgers'}
        details={{ duration: '1 hour', difficultyLevel: 2 }}
      />
      <ArticleThumbnail
        image={{ url: article2 }}
        title={'Chicken and Sage Pasta'}
        details={{ duration: '30 minutes', difficultyLevel: 1 }}
      />
      <ArticleThumbnail
        image={{ url: article3 }}
        title={'Chili-Lime Chicken Fajita with Avocado'}
        details={{ duration: '1 hour', difficultyLevel: 2 }}
      />
      <ArticleThumbnail
        image={{ url: article4 }}
        title={'Easy, Fall-Off-The-Bone Pork Ribs'}
        details={{ duration: '3 hours', difficultyLevel: 3 }}
      />
      <ArticleThumbnail
        image={{ url: article5 }}
        title={'Shrimp Salad'}
        details={{ duration: '<30 minutes', difficultyLevel: 1 }}
      />
      <ArticleThumbnail
        image={{ url: article6 }}
        title={'Best Roasted Potatoes'}
        details={{ duration: '1 hour', difficultyLevel: 1 }}
      />
      <ArticleThumbnail
        image={{ url: article1 }}
        title={'Juicy Burgers'}
        details={{ duration: '1 hour', difficultyLevel: 2 }}
      />
      <ArticleThumbnail
        image={{ url: article2 }}
        title={'Chicken and Sage Pasta'}
        details={{ duration: '30 minutes', difficultyLevel: 1 }}
      />
    </Container>
  );
};

export default Articles;
