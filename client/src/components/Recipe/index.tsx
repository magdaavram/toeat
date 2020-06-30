import React from 'react';
import styled from 'styled-components';
import TabView from 'components/TabView';
import { IRecipe } from 'api/Recipe';
import DifficultyLevel from 'components/DifficultyLevel';
import CookingTime from 'components/CookingTime';
import Image from 'components/Image';

const TopContainer = styled.div`
  height: auto;
  min-height: 360px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const StyledImage = styled(Image)`
  max-width: 80%;
  min-width: 360px;
  margin: 0 27px 27px 0;
`;

const DetailsContainer = styled.div`
  width: calc(100% - 430px);
  min-width: 300px;
  max-width: 400px;
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

const Recipe = (recipe: IRecipe) => {
  const { imageUrl, title, difficultyLevel, duration, course } = recipe;

  return (
    <>
      <TopContainer>
        <StyledImage url={imageUrl} course={course} className="recipe-image" />

        <DetailsContainer>
          <Title>{title}</Title>

          <Details>
            <div>
              Cooking Time:{' '}
              <DetailInfo>
                <CookingTime duration={duration} hasIcon={false} />
              </DetailInfo>
            </div>

            <div>
              Difficulty:{' '}
              <DetailInfo>
                <DifficultyLevel level={difficultyLevel} hasIcon={false} />
              </DetailInfo>
            </div>

            <div>
              Course Type: <DetailInfo>{course}</DetailInfo>
            </div>
          </Details>
        </DetailsContainer>
      </TopContainer>

      <MainContainer>
        <TabView {...recipe} />
      </MainContainer>
    </>
  );
};

export default Recipe;
