import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import TabView from '../TabView';
import { IRecipe } from '../../api/recipes';

interface IImageProps extends InputHTMLAttributes<HTMLDivElement> {
  url: string;
}

const TopContainer = styled.div`
  height: auto;
  min-height: 450px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Image = styled.div((props: IImageProps) => ({
  maxWidth: '80%',
  width: '550px',
  minWidth: '450px',
  height: '450px',
  background: `url(${props.url}) no-repeat center`,
  backgroundSize: 'cover',
  margin: '0 27px 27px 0',
}));

const DetailsContainer = styled.div`
  width: calc(100% - 580px);
  min-width: 300px;
  max-width: 550px;
`;

const Title = styled.h2`
  margin: 0 0 54px 0;
  padding: 0;
  font-size: var(--font-size--xlarge);
  font-family: 'Suisse SemiBold';
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Details = styled.div`
  width: 300px;
  display: flex column;
  padding: 32px;
  border: 3px solid rgba(201, 173, 167, 0.3);
  border-radius: 12px;
  color: var(--color--light-purple);
  font-family: 'Roboto Medium';

  & > div {
    padding: 9px 0;
`;

const DetailInfo = styled.span`
  color: var(--color--medium-purple);
`;

const MainContainer = styled.div`
  margin-top: 36px;
`;

const Recipe = (props: IRecipe) => {
  let levelName;
  const { difficultyLevel } = props;

  difficultyLevel === 1
    ? (levelName = 'Easy')
    : difficultyLevel === 2
    ? (levelName = 'Medium')
    : difficultyLevel === 3
    ? (levelName = 'Complex')
    : (levelName = '');

  return (
    <>
      <TopContainer>
        <Image url={props.imageUrl} />

        <DetailsContainer>
          <Title>{props.title}</Title>

          <Details>
            <div>
              Cooking Time: <DetailInfo>{props.duration}</DetailInfo>
            </div>

            <div>
              Difficulty: <DetailInfo>{levelName}</DetailInfo>
            </div>

            <div>
              Course Type: <DetailInfo>{props.course}</DetailInfo>
            </div>
          </Details>
        </DetailsContainer>
      </TopContainer>

      <MainContainer>
        <TabView {...props} />
      </MainContainer>
    </>
  );
};

export default Recipe;
