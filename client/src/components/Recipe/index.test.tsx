import React from 'react';
import { mount } from 'enzyme';
import Recipe from './index';

it('should render correctly', () => {
  const recipe = {
    id: 'recipe1',
    imageUrl: 'recipe-image.png',
    title: 'Recipe Title',
    duration: 30,
    difficultyLevel: 2,
    servings: 4,
    course: 'Breakfast',
    ingredients: [
      {
        ingredient: 'eggs',
        quantity: 3,
        unit: 'pieces',
      }
    ],
    equipment: ['pan'],
    preparation: 'This is the preparation description.',
  };
  const wrapper = mount(<Recipe { ...recipe } />);

  expect(wrapper).toMatchSnapshot();
});
