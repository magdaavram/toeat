import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Recipe, { IRecipe } from 'api/Recipe';
import RecipeDetails from 'components/Recipe';

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
`;

const RecipeView = () => {
  const api = new Recipe();
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    setRecipe(api.getRecipe(2));
  }, [api]);

  return (
    <Container>
      {recipe ? <RecipeDetails {...recipe} /> : <span>This recipe does not exist.</span>}
    </Container>
  );
};

export default RecipeView;
