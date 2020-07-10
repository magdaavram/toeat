import React from 'react';
import RecipeForm, { createEmptyIngredient } from './index';
import {IRecipeRequest} from 'api/Recipe';
import API from 'api';

const AddRecipeView = () => {
  const initialRecipe: IRecipeRequest = {
        ingredients: [createEmptyIngredient(), createEmptyIngredient()],
      } as IRecipeRequest;

  const onSubmit = async (recipe: IRecipeRequest): Promise<string> => {
    const createdRecipe = await API.Recipe.create(recipe);

    return createdRecipe.id;
  }

  return (
    <>
      <RecipeForm recipe={initialRecipe} onSubmit={onSubmit} />
    </>
  )
}

export default AddRecipeView;
