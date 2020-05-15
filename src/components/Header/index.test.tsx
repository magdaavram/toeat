import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from './index';
import LogoIcon from 'assets/icons/Logo';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

it('should render logo and top controls component', () => {
  expect(wrapper.find(LogoIcon)).toHaveLength(1);
  expect(wrapper.find('TopControls')).toHaveLength(1);
});

it('should render link to homepage', () => {
  const link = wrapper.find('Link');

  expect(link.prop('to')).toEqual('/');
});
