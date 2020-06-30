import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Search from './index';

it('should render component correctly', () => {
  const onSubmit = jest.fn();
  const tree = create(<Search handleSearch={onSubmit} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should call the onSubmit function', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(<Search handleSearch={onSubmit} />);

  wrapper.find('form').simulate('submit');
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
