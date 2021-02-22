import React from 'react';
import { mount } from 'enzyme';
import ConfirmationModal from './index';

describe('<ConfirmationModal />', () => {
  const onClose = jest.fn();
  const onConfirm = jest.fn();
  const props = {
    title: 'Title',
    message: 'Message',
    show: true,
    onClose,
    onConfirm,
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ConfirmationModal {...props} />);
  });

  it('should render correctly when shown', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when not shown', () => {
    const newProps = {
      ...props,
      show: false,
    };
    wrapper = mount(<ConfirmationModal {...newProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
