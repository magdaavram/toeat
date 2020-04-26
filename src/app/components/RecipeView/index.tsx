import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IRecipe, getRecipe } from '../../api/recipes';
import Recipe from '../Recipe';

const Container = styled.div`
  width: 70%;
`;

const RecipeView = () => {
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    setRecipe(getRecipe(2));
  }, []);

  return (
    <Container>
      {recipe ? <Recipe {...recipe} /> : <span>This recipe does not exist.</span>}
    </Container>
  );
};

export default RecipeView;
