import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Search from './index';

it('should render component correctly', () => {
  const onClick = jest.fn();
  const tree = create(<Search handleClick={onClick} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should call the onClick function', () => {
  const onClick = jest.fn();
  const wrapper = mount(<Search handleClick={onClick} />);

  wrapper.find('button').simulate('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});
