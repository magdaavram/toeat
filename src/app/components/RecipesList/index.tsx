import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecipeThumbnail from '../RecipeThumbnail';
import getRecipes, { IRecipe } from '../../api/recipes';

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: space-between;
  gap: 54px 36px;
  margin-top: 18px;
  padding-top: 27px;
`;

const RecipesList = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    setRecipes(getRecipes());
  }, []);

  const recipesList = recipes.map((recipe, index) => (
    <RecipeThumbnail
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
