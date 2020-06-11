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
import IngredientsList, { ListOptions } from './IngredientsList';
import Recipe, { IRecipe, Unit } from 'api/Recipe';

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

const getRandomId = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

interface IRecipeWithNullableUnit {
  imageUrl: string;
  title: string;
  duration: number;
  difficultyLevel: number;
  servings: number;
  course: string;
  ingredients: IIngredientWithNullableUnit[];
  equipment: string[];
  preparation: string;
}

export interface IIngredientWithNullableUnit {
  id: string;
  ingredient: string;
  quantity: number;
  unit?: Unit;
}

const AddEditRecipeView = () => {
  const emptyRecipe: IRecipeWithNullableUnit = {
    imageUrl: '',
    title: '',
    duration: 0,
    difficultyLevel: 0,
    servings: 0,
    course: '',
    ingredients: [
      { id: getRandomId(), ingredient: '', quantity: 0 },
      { id: getRandomId(), ingredient: '', quantity: 0 },
    ],
    equipment: [],
    preparation: '',
  };

  const [recipe, setRecipe] = useState<IRecipeWithNullableUnit>(emptyRecipe);

  const handleImageChange = (file: any) => {
    if (file.length) {
      setRecipe((recipe) => {
        return { ...recipe, imageUrl: file[0].name };
      });
    } else {
      setRecipe((recipe) => {
        return { ...recipe, imageUrl: '' };
      });
    }
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

  const handleTextSelectChange = (value: Option | Option[], field: string) => {
    setRecipe((recipe) => {
      if (Array.isArray(value)) {
        const list = value.map((equipment: Option) => equipment.label);

        return { ...recipe, [field]: list };
      }

      return { ...recipe, [field]: value.label };
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

  const emptyIngredient: IIngredientWithNullableUnit = {
    id: getRandomId(),
    ingredient: '',
    quantity: 0,
  };

  const handleAddIngredient = () => {
    setRecipe((recipe) => {
      return {
        ...recipe,
        ingredients: [...recipe.ingredients, emptyIngredient],
      };
    });
  };

  const handleSubmit = (ev: any) => {
    const api = new Recipe();
    const r: IRecipe = {
      id: 0,
      imageUrl: recipe.imageUrl,
      title: recipe.title,
      duration: recipe.duration,
      difficultyLevel: recipe.difficultyLevel,
      servings: recipe.servings,
      course: recipe.course,
      ingredients: recipe.ingredients.map((ingredient: IIngredientWithNullableUnit) => {
        return {
          ingredient: ingredient.ingredient,
          quantity: ingredient.quantity,
          unit: ingredient.unit === undefined ? 'bunch' : ingredient.unit,
        };
      }),
      equipment: recipe.equipment,
      preparation: recipe.preparation,
    };

    api.saveRecipe(r);
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
              handleTextSelectChange(options, 'equipment');
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

export default AddEditRecipeView;
