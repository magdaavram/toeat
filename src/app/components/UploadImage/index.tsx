import React from 'react';
import ImageUploader from 'react-images-upload';

interface IProps {
  singleImage: boolean;
  withPreview: boolean;
  maxFileSize: number;
  label: string;
  fileSizeError: string;
  fileTypeError: string;
  imgExtension: string[];
  withIcon: boolean;
}

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
  fontFamily: 'Roboto Regular',
  fontSize: 'var(--font-size--xxlarge)',
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

const UploadImage = (props: IProps) => {
  return (
    <ImageUploader
      fileContainerStyle={containerStyle}
      buttonText={'+'}
      labelStyles={labelStyle}
      errorStyle={errorStyle}
      buttonStyles={buttonStyle}
      {...props}
    />
  );
};

export default UploadImage;
