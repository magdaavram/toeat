import React from 'react';
import { create } from 'react-test-renderer';
import DifficultyLevel from './index';

it('should render with icon corresponding to level 1', () => {
  const tree = create(<DifficultyLevel level={1} hasIcon={true} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render with icon corresponding to level 2', () => {
  const tree = create(<DifficultyLevel level={2} hasIcon={true} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render with icon corresponding to level 3', () => {
  const tree = create(<DifficultyLevel level={3} hasIcon={true} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render with text only', () => {
  const tree = create(<DifficultyLevel level={2} hasIcon={false} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render with no text', () => {
  const tree = create(<DifficultyLevel level={5} hasIcon={false} />);

  expect(tree.toJSON()).toMatchSnapshot();
});
