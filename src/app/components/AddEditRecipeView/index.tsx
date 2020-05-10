import React from 'react';
import styled from 'styled-components';
import ImageUploader from '../UploadImage';
import Input from '../Input';
import Dropdown, { Option } from '../SelectDropdown';
import { Unit } from '../../api/recipes';
import Button from '../Button';
import Textarea from '../Textarea';

const Form = styled.form`
  width: 70%;
  max-width: 700px;
`;

const TextInput = styled(Input)`
  min-width: 300px;
  height: 45px;
  margin: 18px 0;
`;

const DetailsContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const NumberInput = styled(Input)`
  width: 150px;
  height: 40px;
  padding: 0 9px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;

const AddItemsContainer = styled.div`
  margin: 18px 0;
  background-color: rgba(201, 173, 167, 0.3);
  padding: 18px;
  border-radius: 12px;
`;

const Subtitle = styled.h3`
  font-size: var(--font-size--large);
  font-weight: normal;
  margin: 0 0 18px 0;
`;

const Item = styled.div`
  display: flex;
  // justify-content: space-between;
  margin-bottom: 18px;

  & > *:not(:last-child) {
    margin-right: 9px;
  }
`;
const AddButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: var(--color--medium-purple);
  font-family: Roboto Regular;
  font-size: var(--font-size--xlarge);
  color: var(--color--beige);
  padding: 0;
  border-radius: 50%;

  &:hover {
    opacity: 0.9;
  }
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

const units: Unit[] = ['grams', 'kg', 'l', 'ml', 'sp', 'tsp', 'pinch', 'pieces', 'bunch'];
const unitOptions: Option[] = Array.from(
  { length: units.length },
  (value: undefined, index: number) => {
    return { value: index + 1, label: `${units[index]}` };
  }
);

const ingredients = [
  'tomatoes',
  'potatoes',
  'carrots',
  'rice',
  'salt',
  'parsley',
  'sugar',
  'chocolate',
];
const ingredientsOptions: Option[] = Array.from(
  { length: ingredients.length },
  (value: undefined, index: number) => {
    return { value: index + 1, label: `${ingredients[index]}` };
  }
);

const equipments = ['large pot', 'tongs', 'saute pan', 'ladle'];
const equipmentOptions: Option[] = Array.from(
  { length: equipments.length },
  (value: undefined, index: number) => {
    return { value: index + 1, label: `${equipments[index]}` };
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
        <NumberInput type="number" min={0} max={1440} placeholder={'Minutes (cooking)'} required />
      </DetailsContainer>

      <AddItemsContainer>
        <Subtitle>Ingredients</Subtitle>
        <Item>
          <NumberInput
            style={{ width: '100px' }}
            type="number"
            min={0}
            max={999}
            placeholder={'Quantity'}
            required
          />
          <Dropdown selected={0} options={unitOptions} width={'150px'} placeholder={'Unit'} />
          <Dropdown
            selected={0}
            options={ingredientsOptions}
            width={'200px'}
            placeholder={'Ingredient'}
          />
        </Item>
        <AddButton type="button" onClick={() => console.log('clicked add ingredient')}>
          +
        </AddButton>
      </AddItemsContainer>

      <AddItemsContainer>
        <Subtitle>Equipment</Subtitle>
        <Item>
          <Dropdown selected={0} options={equipmentOptions} width={'200px'} placeholder={'Item'} />
        </Item>
        <AddButton type="button" onClick={() => console.log('clicked add equipment')}>
          +
        </AddButton>
      </AddItemsContainer>

      <Textarea placeholder={'Describe preparation details'} required />
    </Form>
  );
};

export default AddEditRecipeView;
