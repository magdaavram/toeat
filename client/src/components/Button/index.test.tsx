import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

describe('<Button /> renders correctly', () => {
  const tests = [
    {
      description: 'should render button with text',
      props: { hasIcon: false, text: 'Click me!' }
    },
    {
      description: 'should render button with search icon',
      props: { hasIcon: true, icon: 'search', iconHeight: 20, iconWidth: 20 }
    },
    {
      description: 'should render button with filter icon',
      props: { hasIcon: true, icon: 'filter', iconHeight: 20, iconWidth: 20 }
    },
    {
      description: 'should render button with add icon',
      props: { hasIcon: true, icon: 'add', iconHeight: 20, iconWidth: 20 }
    },
    {
      description: 'should render button with delete icon',
      props: { hasIcon: true, icon: 'delete', iconHeight: 20, iconWidth: 20 }
    },
    {
      description: 'should render button with edit icon',
      props: { hasIcon: true, icon: 'edit', iconHeight: 20, iconWidth: 20 }
    }
  ];

  tests.forEach(test => {
    it(test.description, () => {
      const wrapper = mount(<Button {...test.props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
