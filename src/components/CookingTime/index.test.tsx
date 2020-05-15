import React from 'react';
import { shallow, mount } from 'enzyme';
import CookingTime from './index';

it('should render with icon and text', () => {
  const wrapper = mount(<CookingTime duration={30} hasIcon={true} />);

  expect(wrapper.find('svg')).toHaveLength(1);
  expect(wrapper.contains('30 minutes'));
});

it('should render with text only', () => {
  const wrapper = shallow(<CookingTime duration={30} hasIcon={false} />);

  expect(wrapper.find('DurationIcon')).toHaveLength(0);
  expect(wrapper.contains('30 minutes'));
});

it('should render with minutes only (less than 60)', () => {
  const wrapper = shallow(<CookingTime duration={10} hasIcon={false} />);

  expect(wrapper.contains('10 minutes'));
});

it('should render with hours only (multiple of 60)', () => {
  const wrapper = shallow(<CookingTime duration={120} hasIcon={false} />);

  expect(wrapper.contains('2 hours'));
});

it('should render with hours and minutes (more than 60 and not multiple of 60)', () => {
  const wrapper = shallow(<CookingTime duration={210} hasIcon={false} />);

  expect(wrapper.contains('3 hours 30 minutes'));
});
