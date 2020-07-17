import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecipeForm, { getRandomId } from './index';
import { useParams } from 'react-router-dom';
import API from 'api';
import { IRecipeRequest } from 'api/Recipe';

const Loading = styled.div`
  padding-top: 54px;
  color: var(--color--light-purple);
  font-size: var(--font-size--large);
`;

const EditRecipeView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [recipeToEdit, setRecipeToEdit] = useState<IRecipeRequest>({} as IRecipeRequest);
  const { id: recipeIdToEdit } = useParams();

  const onSubmit = async (recipe: IRecipeRequest): Promise<string> => {
    const editedRecipe = await API.Recipe.update(recipe);

    return editedRecipe.id;
  };

  const fetchAndSetRecipeToEdit = () => {
    API.Recipe.get(recipeIdToEdit)
      .then((recipe) => {
        const currentRecipe = recipe as IRecipeRequest;

        currentRecipe.ingredients = currentRecipe?.ingredients.map((ingredient) => {
          return { ...ingredient, id: getRandomId() };
        });

        setRecipeToEdit(currentRecipe);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };

  useEffect(fetchAndSetRecipeToEdit, []);

  return (
    <>
      {loading && <Loading>Loading...</Loading>}
      {!loading && <RecipeForm recipe={recipeToEdit} onSubmit={onSubmit} />}
    </>
  );
};

export default EditRecipeView;
