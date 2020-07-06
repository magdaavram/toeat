import React from 'react';
import styled from 'styled-components';
import { IIngredientRequest } from 'api/Recipe';
import NumberInput from 'components/Input/Number';
import SelectDropdown from 'components/Dropdown/SelectDropdown';
import CreatableSelect from 'components/Dropdown/CreatableDropdown';
import DeleteButton from 'components/Button/Delete';
import { Option } from 'components/Dropdown';
import { getIngredients, getUnits } from 'api/dropdownData';
import AddButton from 'components/Button/Add';

interface IProps {
  ingredients: IIngredientRequest[];
  onDelete: (index: number) => void;
  onAdd: () => void;
  onChange: (options: ListOptions) => void;
}

export type ListOptions = {
  index: number;
  field: string;
  value: string | number;
};

const Item = styled.div`
  display: flex;
  margin-bottom: 9px;

  & > *:not(:last-child) {
    margin-right: 9px;
  }
`;

Item.displayName = 'Item';

const mapOptions = (list: { id: number; name: string }[]): Option[] => {
  return list.map((item) => {
    return { value: item.id, label: item.name };
  });
};

const unitOptions: Option[] = mapOptions(getUnits());
const ingredientsOptions: Option[] = mapOptions(getIngredients());

const IngredientsList = ({ ingredients, onDelete, onChange, onAdd }: IProps) => (
  <>
    {ingredients.map((ingredient: IIngredientRequest, index: number) => (
      <Item key={ingredient.id}>
        <NumberInput
          style={{ width: '100px' }}
          type="number"
          min={0}
          max={999}
          placeholder={'Quantity'}
          value={ingredient.quantity}
          onChange={(ev) =>
            onChange({ index: index, field: 'quantity', value: Number(ev.target.value) })
          }
          required
        />

        <SelectDropdown
          selected={unitOptions.findIndex((unit) => unit.label === ingredient.unit) + 1}
          options={unitOptions}
          width={'150px'}
          placeholder={'Unit'}
          onChange={(val: Option) => onChange({ index: index, field: 'unit', value: val.label })}
        />

        <CreatableSelect
          isClearable
          options={ingredientsOptions}
          value={{ label: ingredient.ingredient, value: index + 1 }}
          width={'200px'}
          placeholder={'Type ingredient'}
          onChange={(val: Option | null) =>
            onChange({ index: index, field: 'ingredient', value: val === null ? '' : val.label })
          }
        />

        {index !== 0 && <DeleteButton onClick={() => onDelete(index)} text={'x'} hasIcon={false} />}
      </Item>
    ))}

    <AddButton onClick={onAdd} text={'+'} hasIcon={false} />
  </>
);

export default IngredientsList;
