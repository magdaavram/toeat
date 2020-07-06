import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { IIngredientRequest, IRecipeRequest } from 'api/Recipe';
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
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState<IRecipeRequest>({} as IRecipeRequest);
  const [savedId, setSavedId] = useState('');
  const [error, setError] = useState('');

  const setInitialRecipe = () => {
    let initialRecipe: IRecipeRequest = {
      ingredients: [createEmptyIngredient(), createEmptyIngredient()],
    } as IRecipeRequest;

    if (id) {
      API.Recipe.get(id)
        .then((recipe) => {
          const recipeToEdit = recipe as IRecipeRequest;
          recipeToEdit.ingredients = recipeToEdit?.ingredients.map((ingredient) => {
            return { ...ingredient, id: getRandomId() };
          });

          initialRecipe = recipeToEdit;
        })
        .catch((err) => setError(err));
    }

    setRecipe(initialRecipe);
    setLoading(false);
  };

  useEffect(setInitialRecipe, []);

  const onSubmit = (recipe: IRecipeRequest) => {
    //API.Recipe.saveRecipe(recipe as IRecipe);
    API.Recipe.create(recipe)
      .then((recipe) => setSavedId(recipe.id))
      .catch((err) => setError(err));
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
