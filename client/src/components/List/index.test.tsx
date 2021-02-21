import React from 'react';
import { mount } from 'enzyme';
import List from './index';

it('should render correctly', () => {
  const props = {
    items: [
      {
        ingredient: 'tomatoes',
        quantity: 200,
        unit: 'grams',
      },
      {
        ingredient: 'potatoes',
        quantity: 500,
        unit: 'grams',
      },
    ],
    renderItem: (ingredient) => `${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredient}`,
  };

  const wrapper = mount(<List {...props}/>);

  expect(wrapper).toMatchSnapshot();
});