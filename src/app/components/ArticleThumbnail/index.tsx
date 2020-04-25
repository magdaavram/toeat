import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import DurationIcon from '../../assets/icons/Duration';
import DifficultyIcon from '../../assets/icons/Difficulty';

interface IImageProps extends InputHTMLAttributes<HTMLDivElement> {
  url: string;
}

interface IProps extends InputHTMLAttributes<HTMLDivElement> {
  image: IImageProps;
  title: string;
  details: {
    duration: string;
    difficultyLevel: number;
  };
}

const Container = styled.div`
  width: 30%;
  max-width: 30%;
  flex-grow: 1;
  margin: 0 12px 45px 0;
`;

const Image = styled.div((props: IProps) => ({
  width: '100%',
  height: '250px',
  background: `url(${props.image.url}) no-repeat center`,
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

const DetailText = styled.span`
  margin-left: 9px;
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

const ArticleThumbnail = (props: IProps) => {
  let levelName;
  const { difficultyLevel } = props.details;

  difficultyLevel === 1
    ? (levelName = 'Easy')
    : difficultyLevel === 2
    ? (levelName = 'Medium')
    : difficultyLevel === 3
    ? (levelName = 'Complex')
    : (levelName = '');

  return (
    <Container>
      <Image {...props}>
        <ImageLink href={'/#'} title={props.title} />
      </Image>
      <DetailsContainer>
        <Detail>
          <DurationIcon />
          <DetailText>{props.details.duration}</DetailText>
        </Detail>
        <Detail>
          <DifficultyIcon level={difficultyLevel} />
          <DetailText>{levelName}</DetailText>
        </Detail>
      </DetailsContainer>
      <Title href={'/#'} title={props.title}>
        {props.title}
      </Title>
    </Container>
  );
};

export default ArticleThumbnail;
