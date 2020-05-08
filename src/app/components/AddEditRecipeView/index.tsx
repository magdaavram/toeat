import React from 'react';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';

const Form = styled.form`
  width: 70%;
`;

const containerStyle = {
  width: '300px',
  height: '300px',
  margin: 0,
  padding: '36px 21px 21px 21px',
  backgroundColor: 'var(--color--light-brown)',
  borderRadius: '9px',
  justifyContent: 'flex-start',
};

const buttonStyle = {
  width: '60px',
  height: '60px',
  fontFamily: 'Suisse SemiBold',
  fontSize: 'var(--font-size--xlarge)',
  color: 'var(--color--beige)',
  padding: '0',
  borderRadius: '50%',
  margin: '18px 0',
};

const labelStyle = {
  fontFamily: 'Suisse Bold',
  fontSize: 'var(--font-size--small)',
  color: 'var(--color--dark-purple)',
  marginTop: '9px',
};

const errorStyle = {
  fontFamily: 'Roboto Medium',
  fontSize: 'var(--font-size--small)',
  color: 'var(--color--burgundy)',
  textAlign: 'center',
};

const AddEditRecipeView = () => {
  return (
    <Form>
      <ImageUploader
        fileContainerStyle={containerStyle}
        singleImage={true}
        imgExtension={['.jpg', '.png']}
        withPreview={true}
        buttonText={'+'}
        maxFileSize={2097152}
        label={'Max. size: 2MB; File types: .png, .jpg'}
        labelStyles={labelStyle}
        fileSizeError={'is too big. Please upload a file of maximum 2 MB.'}
        fileTypeError={'is not supported. Please upload a .png or .jpg file.'}
        errorStyle={errorStyle}
        buttonStyles={buttonStyle}
        withIcon={false}
      />
    </Form>
  );
};

export default AddEditRecipeView;
