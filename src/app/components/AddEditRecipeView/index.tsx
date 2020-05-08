import React from 'react';
import styled from 'styled-components';
import UploadImage from '../UploadImage';

const Form = styled.form`
  width: 70%;
`;

const AddEditRecipeView = () => {
  return (
    <Form>
      <UploadImage
        singleImage={true}
        imgExtension={['.jpg', '.png']}
        withPreview={true}
        maxFileSize={2097152}
        label={'Max. size: 2MB; File types: .png, .jpg'}
        fileSizeError={'is too big. Please upload a file of maximum 2 MB.'}
        fileTypeError={'is not supported. Please upload a .png or .jpg file.'}
        withIcon={false}
      />
    </Form>
  );
};

export default AddEditRecipeView;
