import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from 'components/UploadImage';
import NumberInput from 'components/Input/Number';
import TextInput from 'components/Input/Text';
import SelectDropdown from 'components/Dropdown/SelectDropdown';
import { Option } from 'components/Dropdown';
import ActionButton from 'components/Button/Action';
import Textarea from 'components/Textarea';
import CreatableSelect from 'components/Dropdown/CreatableDropdown';
import { getCourses, getDifficultyLevels, getEquipments } from 'api/dropdownData';
import ConfirmationModal, { IModalProps } from 'components/Modal/ConfirmationModal';
import { IIngredient } from 'api/Recipe';
import IngredientsList, { ListOptions } from './IngredientsList';

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

const CancelButton = styled(ActionButton)`
  background-color: var(--color--light-purple);
`;

const mapOptions = (list: { id: number; name: string }[]): Option[] => {
  return list.map((item) => {
    return { value: item.id, label: item.name };
  });
};

const servingOptions: Option[] = Array.from({ length: 25 }, (value: undefined, index: number) => {
  return { value: index + 1, label: `${index + 1} ${index + 1 === 1 ? 'serving' : 'servings'}` };
});

const courseOptions: Option[] = mapOptions(getCourses());
const difficultyOptions: Option[] = mapOptions(getDifficultyLevels());
const equipmentOptions: Option[] = mapOptions(getEquipments());

const AddEditRecipeView = () => {
  const emptyIngredient: IIngredient = { ingredient: '', quantity: 0, unit: '' };
  const initialIngredients: IIngredient[] = [emptyIngredient, emptyIngredient];
  const [ingredients, setIngredients] = useState<IIngredient[]>(initialIngredients);

  const handleIngredientChange = ({ index, field, value }: ListOptions) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient, j) => {
        if (j === index) {
          return { ...prevState[index], [field]: value };
        }

        return ingredient;
      });
    });
  };

  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((ingredient, j) => j !== index);
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients((prevState) => {
      return [...prevState, emptyIngredient];
    });
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalData: IModalProps = {
    title: 'Discard changes',
    message: 'Are you sure you want to discard all changes?',
    show: modalIsOpen,
    onClose: closeModal,
  };

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
        <SelectDropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={servingOptions}
          placeholder={'Servings'}
        />

        <SelectDropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={courseOptions}
          placeholder={'Course'}
        />

        <SelectDropdown
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

        <IngredientsList
          ingredients={ingredients}
          onDelete={handleDeleteIngredient}
          onAdd={handleAddIngredient}
          onChange={handleIngredientChange}
        />
      </AddItemsContainer>

      <AddItemsContainer>
        <Subtitle>Equipment</Subtitle>

        <Item>
          <CreatableSelect
            isMulti
            options={equipmentOptions}
            width={'500px'}
            placeholder={'Type or select a tool'}
          />
        </Item>
      </AddItemsContainer>

      <Textarea placeholder={'Describe preparation details'} required />

      <ActionButtonsContainer>
        <div>
          <CancelButton onClick={openModal} text={'Cancel'} hasIcon={false} />

          <ConfirmationModal {...modalData} />
        </div>

        <div>
          <ActionButton onClick={() => console.log('pressed Save')} text={'Save'} hasIcon={false} />
        </div>
      </ActionButtonsContainer>
    </Form>
  );
};

export default AddEditRecipeView;
