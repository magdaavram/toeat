import React from 'react';
import {mount} from 'enzyme';
import Image from './index';

describe('Image component should render correctly', () => {
  const tests = [
    {
      description: 'should render given image',
      props: {url: 'image.png', course: 'Breakfast'}
    },
    {
      description: 'should render default image (breakfast)',
      props: {course: 'Breakfast'}
    },
    {
      description: 'should render default image (brunch)',
      props: {course: 'Brunch'}
    },
    {
      description: 'should render default image (dinner)',
      props: {course: 'Dinner'}
    },
    {
      description: 'should render default image (lunch)',
      props: {course: 'Lunch'}
    },
    {
      description: 'should render default image (snack)',
      props: {course: 'Snack'}
    },
    {
      description: 'should render default image (course not declared)',
      props: {course: 'Supper'}
    },
  ];

  tests.forEach(test => {
    it(test.description, () => {
      const wrapper = mount(<Image {...test.props}/>);

      expect(wrapper).toMatchSnapshot();
    });
  })
});
