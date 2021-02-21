import React from 'react';
import { mount } from 'enzyme';
import Filters from './index';

describe('<Filters />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Filters />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should open modal', () => {
    const button = wrapper.find('Button');
    let modal = wrapper.find('FiltersModal');

    expect(modal.props().show).toBeFalsy();

    button.simulate('click');

    modal = wrapper.find('FiltersModal');
    expect(modal.props().show).toBeTruthy();
  });
});
