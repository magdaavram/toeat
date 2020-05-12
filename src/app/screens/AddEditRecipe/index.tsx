import React from 'react';
import styled from 'styled-components';
import ImageUploader from '../../components/UploadImage';
import NumberInput from '../../components/Input/Number';
import TextInput from '../../components/Input/Text';
import Dropdown from '../../components/SelectDropdown';
import { Option } from '../../components/Dropdown';
import DeleteButton from '../../components/Button/Delete';
import AddButton from '../../components/Button/Add';
import ActionButton from '../../components/Button/Action';
import Textarea from '../../components/Textarea';
import CreatableSelect from '../../components/CreatableDropdown';
import {
  getCourses,
  getDifficultyLevels,
  getUnits,
  getIngredients,
  getEquipments,
} from '../../api/dropdownData';

const Form = styled.form`
  width: 70%;
  max-width: 700px;
`;

const DetailsContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 9px;

  & > *:not(:last-child) {
    margin-right: 9px;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 9px 0;
`;

const servingOptions: Option[] = Array.from({ length: 25 }, (value: undefined, index: number) => {
  return { value: index + 1, label: `${index + 1} ${index + 1 === 1 ? 'serving' : 'servings'}` };
});

const courseOptions: Option[] = getCourses().map((item) => {
  return { value: item.id, label: item.name };
});

const difficultyOptions: Option[] = getDifficultyLevels().map((item) => {
  return { value: item.id, label: item.name };
});

const unitOptions: Option[] = getUnits().map((item) => {
  return { value: item.id, label: item.name };
});

const ingredientsOptions: Option[] = getIngredients().map((item) => {
  return { value: item.id, label: item.name };
});

const equipmentOptions: Option[] = getEquipments().map((item) => {
  return { value: item.id, label: item.name };
});

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
          <CreatableSelect
            isClearable
            options={ingredientsOptions}
            width={'200px'}
            placeholder={'Type ingredient'}
          />
        </Item>
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
          <CreatableSelect
            isClearable
            options={ingredientsOptions}
            width={'200px'}
            placeholder={'Type ingredient'}
          />
          <DeleteButton type="button" onClick={() => console.log('clicked delete ingredient')}>
            x
          </DeleteButton>
        </Item>

        <AddButton type="button" onClick={() => console.log('clicked add ingredient')}>
          +
        </AddButton>
      </AddItemsContainer>

      <AddItemsContainer>
        <Subtitle>Equipment</Subtitle>
        <Item>
          <CreatableSelect
            isMulti
            options={equipmentOptions}
            width={'500px'}
            placeholder={'Type tool'}
          />
        </Item>
      </AddItemsContainer>

      <Textarea placeholder={'Describe preparation details'} required />
      <ActionButtonsContainer>
        <ActionButton
          type="button"
          style={{ backgroundColor: 'var(--color--light-purple)' }}
          onClick={() => console.log('pressed Cancel')}>
          Cancel
        </ActionButton>
        <ActionButton onClick={() => console.log('pressed Save')}>Save</ActionButton>
      </ActionButtonsContainer>
    </Form>
  );
};

export default AddEditRecipeView;
