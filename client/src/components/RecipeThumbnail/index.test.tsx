import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Routes from 'routes';
import RecipeThumbnail from './index';
import { IRecipe } from 'api/Recipe';
import RecipeContext from 'RecipeContext';

let recipe: IRecipe;

beforeEach(() => {
  recipe = {
    id: '2',
    imageUrl: 'image.png',
    title: 'Pasta',
    duration: 78,
    difficultyLevel: 2,
    servings: 2,
    course: 'Breakfast',
    ingredients: [],
    equipment: [],
    preparation: 'Lorem ipsum',
  };
});

it('should render correctly', () => {
  const tree = create(
    <MemoryRouter>
      <RecipeThumbnail {...recipe} />
    </MemoryRouter>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should change URL when clicking on image', () => {
  const history = createMemoryHistory();
  const handleIdChange = jest.fn();

  const wrapper = mount(
    <RecipeContext.Provider value={{ id: recipe.id, setId: handleIdChange }}>
      <Router history={history}>
        <RecipeThumbnail {...recipe} />
        <Routes />
      </Router>
    </RecipeContext.Provider>
  );

  wrapper.find('a').at(0).simulate('click', { button: 0 });
  expect(history.location.pathname).toEqual('/recipe/2');
});

it('should change URL when clicking on title', () => {
  const history = createMemoryHistory();
  const handleIdChange = jest.fn();

  const wrapper = mount(
    <RecipeContext.Provider value={{ id: recipe.id, setId: handleIdChange }}>
      <Router history={history}>
        <RecipeThumbnail {...recipe} />
        <Routes />
      </Router>
    </RecipeContext.Provider>
  );

  wrapper.find('a').at(1).simulate('click', { button: 0 });
  expect(history.location.pathname).toEqual('/recipe/2');
});
