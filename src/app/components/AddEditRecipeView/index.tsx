import React from 'react';
import styled from 'styled-components';
import ImageUploader from '../UploadImage';
import Input from '../Input';
import Dropdown, { Option } from '../SelectDropdown';

const Form = styled.form`
  width: 70%;
`;

const TextInput = styled(Input)`
  min-width: 300px;
  height: 45px;
  margin: 18px 0;
`;

const DetailsContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const TimeInput = styled(Input)`
  width: 150px;
  height: 40px;
  padding: 0 9px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;

const servingOptions: Option[] = Array.from({ length: 25 }, (value: undefined, index: number) => {
  return { value: index + 1, label: `${index + 1} ${index + 1 === 1 ? 'serving' : 'servings'}` };
});

const courses = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Snack'];
const courseOptions: Option[] = Array.from(
  { length: courses.length },
  (value: undefined, index: number) => {
    return { value: index + 1, label: `${courses[index]}` };
  }
);

const difficultyLevels = ['Easy', 'Medium', 'Complex'];
const difficultyOptions: Option[] = Array.from(
  { length: difficultyLevels.length },
  (value: undefined, index: number) => {
    return { value: index + 1, label: `${difficultyLevels[index]}` };
  }
);

const AddEditRecipeView = () => {
  return (
    <Form>
      <ImageUploader
        singleImage={true}
        imgExtension={['.jpg', '.png']}
        withPreview={true}
        maxFileSize={2097152}
        label={'Max. size: 2MB; File types: .png, .jpg'}
        fileSizeError={'is too big. Please upload a file of maximum 2 MB.'}
        fileTypeError={'is not supported. Please upload a .png or .jpg file.'}
        withIcon={false}
      />
      <TextInput type="text" placeholder={'Insert a recipe title'} required />
      <DetailsContainer>
        <Dropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={servingOptions}
          placeholder={'Servings'}
        />
        <Dropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={courseOptions}
          placeholder={'Course'}
        />
        <Dropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={difficultyOptions}
          placeholder={'Difficulty'}
        />
        <TimeInput type="number" min={0} max={1440} placeholder={'Mins (duration)'} required />
      </DetailsContainer>
    </Form>
  );
};

export default AddEditRecipeView;
