import React from 'react';

interface IRecipeContext {
  id: string;
  setId: (id: string) => void;
}

const RecipeContext = React.createContext({} as IRecipeContext);

export default RecipeContext;
