import React, { useState } from 'react';
import Form from './Form';
import { IRecipeRequest, IIngredientRequest } from 'api/Recipe';
import { Redirect } from 'react-router-dom';

interface IProps {
  recipe: IRecipeRequest;
  onSubmit: (recipe: IRecipeRequest) => Promise<string>;
}

export const getRandomId = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

export const createEmptyIngredient = (): IIngredientRequest => {
  return { id: getRandomId() } as IIngredientRequest;
};

const RecipeForm = ({ recipe, onSubmit }: IProps) => {
  const [savedId, setSavedId] = useState('');
  const [error, setError] = useState('');

  const onFormSubmit = async (recipe: IRecipeRequest) => {
    try {
      setSavedId(await onSubmit(recipe));
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  return (
    <>
      <Form
        initialRecipe={recipe}
        onSubmit={onFormSubmit}
        createEmptyIngredient={createEmptyIngredient}
      />

      {savedId && <Redirect to={`/recipe/${savedId}`} />}
    </>
  );
};

export default RecipeForm;
