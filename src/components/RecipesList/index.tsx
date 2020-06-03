import React from 'react';
import styled from 'styled-components';
import RecipeThumbnail from 'components/RecipeThumbnail';
import { IRecipe } from 'api/Recipe';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 54px 36px;
  padding-top: 27px;
`;

const RecipesList = ({ recipes }: { recipes: IRecipe[] }) => {
  const recipesList = recipes.map((recipe, index) => (
    <RecipeThumbnail
      id={recipe.id}
      imageUrl={recipe.imageUrl}
      title={recipe.title}
      duration={recipe.duration}
      difficultyLevel={recipe.difficultyLevel}
      key={`recipe-${index}`}
    />
  ));

  return <Container>{recipesList}</Container>;
};

export default RecipesList;
