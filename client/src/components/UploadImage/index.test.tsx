import React from 'react';
import { mount } from 'enzyme';
import UploadImage from './index';

describe('<UploadImage />', () => {
  it('should render correctly', () => {
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

    const wrapper = mount(<UploadImage {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
