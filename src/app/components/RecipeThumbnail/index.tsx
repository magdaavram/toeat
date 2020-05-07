import React from 'react';
import styled from 'styled-components';
import DifficultyLevel from '../DifficultyLevel';
import CookingTime from '../CookingTime';

interface IImageProps {
  url: string;
}

interface IProps {
  imageUrl: string;
  title: string;
  duration: number;
  difficultyLevel: number;
}

const Container = styled.div`
  max-width: 400px;
`;

const Image = styled.div((props: IImageProps) => ({
  width: '100%',
  height: '250px',
  background: `url(${props.url}) no-repeat center`,
  backgroundSize: 'cover',
}));

const ImageLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: var(--color--medium-purple);
  font-size: var(--font-size--small);
  font-family: 'Roboto Medium';
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-right: 27px;
`;

const Title = styled.a`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 6px 0 9px 0;
  text-decoration: none;
  color: var(--color--dark-purple);
  font-size: var(--font-size--large);
  font-family: 'Suisse SemiBold';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: var(--color--burgundy);
  }
`;

const RecipeThumbnail = (props: IProps) => {
  const { imageUrl, title, duration, difficultyLevel } = props;

  return (
    <Container>
      <Image url={imageUrl}>
        <ImageLink href={'/#'} title={title} />
      </Image>
      <DetailsContainer>
        <Detail>
          <CookingTime duration={duration} hasIcon={true} />
        </Detail>
        <Detail>
          <DifficultyLevel level={difficultyLevel} hasIcon={true} />
        </Detail>
      </DetailsContainer>
      <Title href={'/#'} title={title}>
        {title}
      </Title>
    </Container>
  );
};

export default RecipeThumbnail;
