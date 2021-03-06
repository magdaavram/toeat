import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { IRecipe } from 'api/Recipe';
import API from 'api';
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
  const { id } = useParams();

  const { setId: setRecipeId } = useContext(RecipeContext);
  useEffect(() => {
    setRecipeId(id);
  }, [setRecipeId, id]);

  const [recipe, setRecipe] = useState<IRecipe>();
  const [error, setError] = useState('');

  const fetchAndSetRecipe = () => {
    API.Recipe.get(id)
      .then((recipe: IRecipe) => setRecipe(recipe))
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };

  useEffect(fetchAndSetRecipe, []);

  return (
    <Container>
      {recipe ? <RecipeDetails {...recipe} /> : <NoRecipe>This recipe was not found.</NoRecipe>}
    </Container>
  );
};

export default RecipeView;
