import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Breakfast from './images/Breakfast.png';
import Brunch from './images/Brunch.png';
import Dinner from './images/Dinner.png';
import Lunch from './images/Lunch.png';
import Snack from './images/Snack.png';

interface IImageProps extends InputHTMLAttributes<HTMLDivElement> {
  url: string;
  course: string;
}

const ImageStyle = styled.div(({ url }: IImageProps) => ({
  width: '400px',
  height: '360px',
  background: `url(${url}) no-repeat center`,
  backgroundSize: 'cover',
}));

const Image = ({ url, course, className }: IImageProps) => {
  return <ImageStyle className={className} url={getUrl(url, course)} course={course} />;
};

export default Image;

const getUrl = (url: string, course: string): string => {
  let imageUrl = url;

  if (url === '') {
    const defaultImages: any = {
      Breakfast: Breakfast,
      Brunch: Brunch,
      Dinner: Dinner,
      Lunch: Lunch,
      Snack: Snack,
    };

    imageUrl = defaultImages[course] || Lunch;
  }

  return imageUrl;
};
