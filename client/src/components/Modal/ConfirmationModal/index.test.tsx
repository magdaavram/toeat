import React from 'react';
import { mount } from 'enzyme';
import ConfirmationModal from './index';

describe('<ConfirmationModal />', () => {
  const mockFunction = jest.fn();
  const props = {
    title: 'Title',
    message: 'Message',
    show: true,
    onClose: mockFunction,
    onConfirm: mockFunction,
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


  describe('test callbacks', () => {
    const tests = [
      {
        description: 'should trigger onClose callback when clicking on close button',
        button: '#close-button button',
        callback: props.onClose,
      },
      {
        description: 'should trigger onClose callback when clicking on cancel button',
        button: '#cancel-button button',
        callback: props.onClose,
      },
      {
        description: 'should trigger onConfirm callback when clicking on confirm button',
        button: '#confirm-button button',
        callback: props.onConfirm,
      },
    ];

    tests.forEach((test, index) => {
      it(test.description, () => {
        const button = wrapper.find(test.button);
        button.simulate('click');

        expect(test.callback).toHaveBeenCalledTimes(index + 1);
      });
    });
  });
});
