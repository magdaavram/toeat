import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { IRecipe, IIngredientRequest, IRecipeRequest } from 'api/Recipe';
import API from 'api';
import { useParams, Redirect } from 'react-router-dom';

const Loading = styled.div`
  padding-top: 54px;
  color: var(--color--light-purple);
  font-size: var(--font-size--large);
`;

const getRandomId = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

const createEmptyIngredient = (): IIngredientRequest => {
  return { id: getRandomId() } as IIngredientRequest;
};

const AddEditRecipeView = () => {
  const { id: recipeIdToEdit } = useParams();

  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState<IRecipeRequest>({} as IRecipeRequest);
  const [savedId, setSavedId] = useState('');
  const [error, setError] = useState('');

  const setInitialRecipe = () => {
    let initialRecipe: IRecipeRequest = {
      ingredients: [createEmptyIngredient(), createEmptyIngredient()],
    } as IRecipeRequest;

    if (recipeIdToEdit) {
      API.Recipe.get(recipeIdToEdit)
        .then((recipe) => {
          const recipeToEdit = recipe as IRecipeRequest;
          recipeToEdit.ingredients = recipeToEdit?.ingredients.map((ingredient) => {
            return { ...ingredient, id: getRandomId() };
          });

          initialRecipe = recipeToEdit;
          setRecipe(initialRecipe);
          setLoading(false);
        })
        .catch((err) => setError(err));
    } else {
      setLoading(false);
    }
  };

  useEffect(setInitialRecipe, []);

  const onSubmit = (recipe: IRecipeRequest) => {
    if (recipeIdToEdit) {
      API.Recipe.update(recipe as IRecipe)
        .then((recipe) => {
          setSavedId(recipe.id);
        })
        .catch(err => setError(err));
    } else {
      API.Recipe.create(recipe)
        .then((recipe) => setSavedId(recipe.id))
        .catch((err) => setError(err));
    }
  };

  return (
    <>
      {loading && <Loading>Loading...</Loading>}
      {!loading && (
        <Form
          initialRecipe={recipe}
          onSubmit={onSubmit}
          createEmptyIngredient={createEmptyIngredient}
        />
      )}
      {savedId && <Redirect to={`/recipe/${savedId}`} />}
    </>
  );
};

export default AddEditRecipeView;
