import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Recipe, { IRecipe } from 'api/Recipe';
import RecipeDetails from 'components/Recipe';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
`;

const NoRecipe = styled.div`
  padding-top: 54px;
  color: var(--color--light-purple);
  font-size: var(--font-size--large);
`;

const RecipeView = () => {
  const { id } = useParams();
  const api = new Recipe();
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    setRecipe(api.getRecipe(Number(id)));
  }, [api, id]);

  return (
    <Container>
      {recipe ? <RecipeDetails {...recipe} /> : <NoRecipe>This recipe was not found.</NoRecipe>}
    </Container>
  );
};

export default RecipeView;
