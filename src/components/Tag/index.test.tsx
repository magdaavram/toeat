import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Tag from './index';

it('should render as active', () => {
  const tree = create(<Tag name={'tomato'} active={true} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should render as inactive', () => {
  const tree = create(<Tag name={'tomato'} active={false} />);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should call the onClick function', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Tag name={'tomato'} active={true} onClick={onClick} />);

  wrapper.props().onClick();
  expect(onClick).toHaveBeenCalledTimes(1);
});
