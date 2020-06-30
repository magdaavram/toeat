import React from 'react';

interface IRecipeContext {
  id: number;
  setId: (id: number) => void;
}

const RecipeContext = React.createContext({} as IRecipeContext);

export default RecipeContext;
