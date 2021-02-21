import React from 'react';
import { mount } from 'enzyme';
import Recommended from './Recommended';

it('should render correctly', () => {
  const wrapper = mount(<Recommended />);

  expect(wrapper).toMatchSnapshot();
});
