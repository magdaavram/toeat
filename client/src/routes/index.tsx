import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'screens/Homepage';
import RecipeView from 'screens/ViewRecipe';
import AddRecipeView from 'screens/AddEditRecipe/AddRecipeView';
import EditRecipeView from 'screens/AddEditRecipe/EditRecipeView';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/recipe/:id" component={RecipeView} />
      <Route path="/add-recipe" exact component={AddRecipeView} />
      <Route path="/edit-recipe/:id" component={EditRecipeView} />

      <Route component={Homepage} />
    </Switch>
  );
};

export default Routes;
