import React, { useState } from 'react';
import ActionButton from 'components/Button/Action';
import { Option } from 'components/Dropdown';
import { getCourses, getDifficultyLevels, getEquipments } from 'api/dropdownData';
import IngredientsList, { ListOptions } from './IngredientsList';
import ConfirmationModal, { IModalProps } from 'components/Modal/ConfirmationModal';
import ImageUploader from 'components/UploadImage';
import TextInput from 'components/Input/Text';
import SelectDropdown from 'components/Dropdown/SelectDropdown';
import NumberInput from 'components/Input/Number';
import CreatableSelect from 'components/Dropdown/CreatableDropdown';
import Textarea from 'components/Textarea';
import { IRecipeRequest, IIngredientRequest } from './index';
import {
  Form,
  DetailsContainer,
  ActionButtonsContainer,
  AddItemsContainer,
  CancelButton,
  Item,
  Subtitle,
} from './FormStyle';

interface IProps {
  initialRecipe: IRecipeRequest;
  onSubmit: (recipe: IRecipeRequest) => void;
  createEmptyIngredient: () => IIngredientRequest;
}

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

const RecipeForm = ({ initialRecipe, onSubmit, createEmptyIngredient }: IProps) => {
  const [recipe, setRecipe] = useState<IRecipeRequest>(initialRecipe);

  const handleImageChange = (file: any) => {
    setRecipe((recipe) => {
      const recipeCopy = { ...recipe };

      if (file.length === 1) {
        recipeCopy.imageUrl = file[0].name;
      } else {
        delete recipeCopy.imageUrl;
      }

      return recipeCopy;
    });
  };

  const handleTextInputChange = (ev: any, field: string) => {
    ev.persist();
    setRecipe((recipe) => {
      return { ...recipe, [field]: ev.target.value };
    });
  };

  const handleNumberInputChange = (ev: any, field: string) => {
    ev.persist();
    setRecipe((recipe) => {
      return { ...recipe, [field]: Number(ev.target.value) };
    });
  };

  const handleNumberSelectChange = (value: Option, field: string) => {
    setRecipe((recipe) => {
      return { ...recipe, [field]: value.value };
    });
  };

  const handleTextSelectChange = (value: Option, field: string) => {
    setRecipe((recipe) => {
      return { ...recipe, [field]: value.label };
    });
  };

  const handleTextMultiSelectChange = (value: Option[], field: string) => {
    const list = value.map((equipment: Option) => equipment.label);

    setRecipe((recipe) => {
      return { ...recipe, [field]: list };
    });
  };

  const handleIngredientChange = ({ index, field, value }: ListOptions) => {
    setRecipe((recipe) => {
      const updatedIngredients = recipe.ingredients.map((ingredient, j) => {
        if (j === index) {
          return { ...recipe.ingredients[index], [field]: value };
        }

        return ingredient;
      });

      return { ...recipe, ingredients: updatedIngredients };
    });
  };

  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = recipe.ingredients.filter((ingredient, j) => j !== index);

    setRecipe((recipe) => {
      return { ...recipe, ingredients: updatedIngredients };
    });
  };

  const handleAddIngredient = () => {
    setRecipe((recipe) => {
      return {
        ...recipe,
        ingredients: [...recipe.ingredients, createEmptyIngredient()],
      };
    });
  };

  const handleSubmit = (ev: any) => {
    onSubmit(recipe);
    ev.preventDefault();
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
    <Form onSubmit={handleSubmit}>
      <ImageUploader
        singleImage={true}
        imgExtension={['.jpg', '.png']}
        withPreview={true}
        maxFileSize={2097152}
        label={'Max. size: 2MB; File types: .png, .jpg'}
        fileSizeError={'is too big. Please upload a file of maximum 2 MB.'}
        fileTypeError={'is not supported. Please upload a .png or .jpg file.'}
        withIcon={false}
        onChange={handleImageChange}
      />

      <TextInput
        type="text"
        placeholder={'Insert a recipe title'}
        onChange={(ev: any) => handleTextInputChange(ev, 'title')}
        required
      />

      <DetailsContainer>
        <SelectDropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={servingOptions}
          placeholder={'Servings'}
          onChange={(value: Option) => handleNumberSelectChange(value, 'servings')}
        />

        <SelectDropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={courseOptions}
          placeholder={'Course'}
          onChange={(value: Option) => handleTextSelectChange(value, 'course')}
        />

        <SelectDropdown
          width={'150px'}
          margin={'0 9px 0 0'}
          selected={0}
          options={difficultyOptions}
          placeholder={'Difficulty'}
          onChange={(value: Option) => handleNumberSelectChange(value, 'difficultyLevel')}
        />

        <NumberInput
          type="number"
          min={0}
          max={1440}
          placeholder={'Minutes (cooking)'}
          onChange={(ev: any) => handleNumberInputChange(ev, 'duration')}
          required
        />
      </DetailsContainer>

      <AddItemsContainer>
        <Subtitle>Ingredients</Subtitle>

        <IngredientsList
          ingredients={recipe.ingredients}
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
            onChange={(value: Option[] | null) => {
              const options = value === null ? [] : value;
              handleTextMultiSelectChange(options, 'equipment');
            }}
          />
        </Item>
      </AddItemsContainer>

      <Textarea
        placeholder={'Describe preparation details'}
        onChange={(ev: any) => handleTextInputChange(ev, 'preparation')}
        required
      />

      <ActionButtonsContainer>
        <div>
          <CancelButton onClick={openModal} text={'Cancel'} hasIcon={false} />

          <ConfirmationModal {...modalData} />
        </div>

        <div>
          <ActionButton type="submit" text={'Save'} hasIcon={false} />
        </div>
      </ActionButtonsContainer>
    </Form>
  );
};

export default RecipeForm;
