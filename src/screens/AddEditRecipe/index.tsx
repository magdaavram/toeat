import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';
import Recipe, { IRecipe, Unit } from 'api/Recipe';
import { useParams } from 'react-router-dom';

const Loading = styled.div`
  padding-top: 54px;
  color: var(--color--light-purple);
  font-size: var(--font-size--large);
`;

const getRandomId = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

export interface IRecipeRequest {
  id?: number;
  imageUrl?: string;
  title: string;
  duration: number;
  difficultyLevel: number;
  servings: number;
  course: string;
  ingredients: IIngredientRequest[];
  equipment: string[];
  preparation: string;
}

export interface IIngredientRequest {
  id: string;
  ingredient: string;
  quantity: number;
  unit: Unit;
}

const createEmptyIngredient = (): IIngredientRequest => {
  return { id: getRandomId() } as IIngredientRequest;
};

const AddEditRecipeView = () => {
  const { id: stringId } = useParams();
  const id = Number(stringId);
  const api = new Recipe();

  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState<IRecipeRequest>({} as IRecipeRequest);

  const setInitialRecipe = () => {
    let initialRecipe: IRecipeRequest = {
      ingredients: [createEmptyIngredient(), createEmptyIngredient()],
    } as IRecipeRequest;

    if (id) {
      const recipeToEdit = api.getRecipe(id) as IRecipeRequest;
      recipeToEdit.ingredients = recipeToEdit?.ingredients.map((ingredient) => {
        return { ...ingredient, id: getRandomId() };
      });

      initialRecipe = recipeToEdit;
    }

    setRecipe(initialRecipe);
    setLoading(false);
  };

  useEffect(setInitialRecipe, []);

  const onSubmit = (recipe: IRecipeRequest) => {
    api.saveRecipe(recipe as IRecipe);
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
    </>
  );
};

export default AddEditRecipeView;
