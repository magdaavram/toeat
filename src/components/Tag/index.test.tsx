import React from 'react';
import { create } from 'react-test-renderer';
import Tag from './index';

it('should render as active', () => {
  const tree = create(<Tag name={'tomato'} active={true} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render as inactive', () => {
  const tree = create(<Tag name={'tomato'} active={false} />);

  expect(tree.toJSON()).toMatchSnapshot();
});
