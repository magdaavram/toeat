import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'screens/Homepage';
import RecipeView from 'screens/ViewRecipe';
import AddEditRecipeView from 'screens/AddEditRecipe';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/recipe/:id" component={RecipeView} />
      <Route path="/add-recipe" exact component={AddEditRecipeView} />
      <Route path="/edit-recipe/:id" component={AddEditRecipeView} />

      <Route component={Homepage} />
    </Switch>
  );
};

export default Routes;
