import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Recipe, { IRecipe } from 'api/Recipe';
import RecipeDetails from 'components/Recipe';
import { useParams } from 'react-router-dom';
import RecipeContext from 'RecipeContext';

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
  const { id: stringId } = useParams();
  const id = Number(stringId);

  const { setId: setRecipeId } = useContext(RecipeContext);
  useEffect(() => {
    setRecipeId(id);
  }, [setRecipeId, id]);

  const api = new Recipe();
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    setRecipe(api.getRecipe(id));
  }, [api, id]);

  return (
    <Container>
      {recipe ? <RecipeDetails {...recipe} /> : <NoRecipe>This recipe was not found.</NoRecipe>}
    </Container>
  );
};

export default RecipeView;
