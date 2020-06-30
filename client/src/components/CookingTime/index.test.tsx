import React from 'react';
import { shallow, mount } from 'enzyme';
import CookingTime from './index';

it('should render with icon and text', () => {
  const wrapper = mount(<CookingTime duration={30} hasIcon={true} />);

  expect(wrapper.find('svg')).toHaveLength(1);
  expect(wrapper.text()).toEqual('30 min');
});

it('should render with text only', () => {
  const wrapper = shallow(<CookingTime duration={30} hasIcon={false} />);

  expect(wrapper.find('DurationIcon')).toHaveLength(0);
  expect(wrapper.text()).toEqual('30 min');
});

it('should render with minutes only (less than 60)', () => {
  const wrapper = shallow(<CookingTime duration={10} hasIcon={false} />);

  expect(wrapper.text()).toEqual('10 min');
});

it('should render with hours only (multiple of 60)', () => {
  const wrapper = shallow(<CookingTime duration={120} hasIcon={false} />);

  expect(wrapper.text()).toEqual('2h');
});

it('should render with hours and minutes (more than 60 and not multiple of 60)', () => {
  const wrapper = shallow(<CookingTime duration={210} hasIcon={false} />);

  expect(wrapper.text()).toEqual('3h 30 min');
});
