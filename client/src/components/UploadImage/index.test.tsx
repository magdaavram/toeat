import React from 'react';
import { mount } from 'enzyme';
import UploadImage from './index';


describe('<UploadImage />', () => {
  let wrapper;
  const onChange = jest.fn();
  const props = {
    singleImage: true,
    withPreview: true,
    maxFileSize: 200,
    label: 'Label',
    fileSizeError: 'File size error',
    fileTypeError: 'File type error',
    imgExtension: ['.png', '.jpg'],
    withIcon: true,
    onChange,
  };

  beforeEach(() => {
    wrapper = mount(<UploadImage {...props} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
