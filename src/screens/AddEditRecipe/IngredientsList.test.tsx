import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import IngredientsList from './IngredientsList';
import { IIngredientWithNullableUnit } from './index';

let mockFunction: () => void;
let mockData: IIngredientWithNullableUnit[];
let wrapper: ShallowWrapper;

beforeEach(() => {
  mockFunction = jest.fn();
  mockData = [
    { id: '1', ingredient: 'tomatoes', quantity: 2, unit: 'kg' },
    { id: '2', ingredient: 'potatoes', quantity: 1, unit: 'kg' },
    { id: '3', ingredient: 'parsley', quantity: 1, unit: 'bunch' },
  ];

  wrapper = shallow(
    <IngredientsList
      ingredients={mockData}
      onDelete={mockFunction}
      onAdd={mockFunction}
      onChange={mockFunction}
    />
  );
});

it('should render the correct number of items', () => {
  expect(wrapper.find('Item')).toHaveLength(mockData.length);
});

it('should not render the delete button on the first item', () => {
  const firstIngredient = wrapper.find('Item').first();

  expect(firstIngredient.find('DeleteButton')).toHaveLength(0);
});

it('should render the correct number of delete buttons', () => {
  expect(wrapper.find('Item DeleteButton')).toHaveLength(mockData.length - 1);
});

it('should render one add button', () => {
  expect(wrapper.find('AddButton')).toHaveLength(1);
});

it('should call the onChange function on input', () => {
  const ingredient = wrapper.find('Item').at(1);
  const event = {
    preventDefault() {},
    target: { value: 'the-value' },
  };

  ingredient.find('NumberInput').simulate('change', event);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

it('should call the onChange function on Select dropdown', () => {
  const ingredient = wrapper.find('Item').at(1);

  ingredient.find('SelectDropdown').simulate('change', { preventDefault() {} });
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

it('should call the onChange function on Creatable select', () => {
  const ingredient = wrapper.find('Item').at(1);

  ingredient.find('CreatableSelect').simulate('change', { preventDefault() {} });
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

it('should call the delete function on delete button', () => {
  const ingredient = wrapper.find('Item').at(1);

  ingredient.find('DeleteButton').simulate('click', { button: 0 });
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

it('should call the add function on add button', () => {
  const addButton = wrapper.find('AddButton');

  addButton.simulate('click', { button: 0 });
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

it('should render component correctly', () => {
  const tree = create(
    <IngredientsList
      ingredients={mockData}
      onDelete={mockFunction}
      onAdd={mockFunction}
      onChange={mockFunction}
    />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
