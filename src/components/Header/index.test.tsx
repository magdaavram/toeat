import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/Header/index';
import LogoIcon from 'assets/icons/Logo';

it('renders logo and top controls component', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('Link').find(LogoIcon)).toHaveLength(1);
  expect(wrapper.find('TopControls')).toHaveLength(1);
});

it('renders link to homepage', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('Link').prop('to')).toEqual('/');
});
