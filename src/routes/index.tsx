import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from 'services/history';
import Homepage from 'screens/Homepage';
import RecipeView from 'screens/ViewRecipe';
import AddEditRecipeView from 'screens/AddEditRecipe';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/recipe" component={RecipeView} />
        <Route path="/add-recipe" exact component={AddEditRecipeView} />
        <Route path="/edit-recipe" exact component={AddEditRecipeView} />

        <Route component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
