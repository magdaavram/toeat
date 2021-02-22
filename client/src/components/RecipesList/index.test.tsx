import React from 'react';
import { mount } from 'enzyme';
import RecipesList from './index';
import Routes from 'routes';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should render correctly', () => {
  const recipes = [
    {
      id: 'recipe1',
      imageUrl: 'recipe1-image.png',
      title: 'Recipe 1 Title',
      duration: 30,
      difficultyLevel: 2,
      servings: 4,
      course: 'Breakfast',
      ingredients: [
        {
          ingredient: 'eggs',
          quantity: 3,
          unit: 'pieces',
        },
      ],
      equipment: ['pan'],
      preparation: 'This is the preparation description.',
    },
    {
      id: 'recipe2',
      imageUrl: 'recipe2-image.png',
      title: 'Recipe 2 Title',
      duration: 60,
      difficultyLevel: 3,
      servings: 6,
      course: 'Dinner',
      ingredients: [
        {
          ingredient: 'tomatoes',
          quantity: 300,
          unit: 'grams',
        },
      ],
      equipment: ['tongues'],
      preparation: 'This is the preparation description.',
    },
  ];

  const history = createMemoryHistory();
  const wrapper = mount(
      <Router history={history}>
        <RecipesList recipes={recipes}/>
        <Routes />
      </Router>
    );

  expect(wrapper).toMatchSnapshot();
});
