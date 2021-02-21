import React from 'react';
import {mount} from 'enzyme';
import Filters from './index';

it('should render correctly', () => {
  const wrapper = mount(<Filters />);

  expect(wrapper).toMatchSnapshot();
});
