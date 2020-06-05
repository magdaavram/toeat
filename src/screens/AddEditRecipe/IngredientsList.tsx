import React from 'react';
import styled from 'styled-components';
import { IIngredientWithNullableUnit } from './index';
import NumberInput from 'components/Input/Number';
import SelectDropdown from 'components/Dropdown/SelectDropdown';
import CreatableSelect from 'components/Dropdown/CreatableDropdown';
import DeleteButton from 'components/Button/Delete';
import { Option } from 'components/Dropdown';
import { getIngredients, getUnits } from 'api/dropdownData';
import AddButton from 'components/Button/Add';

interface IProps {
  ingredients: IIngredientWithNullableUnit[];
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
    {ingredients.map((ingredient: IIngredientWithNullableUnit, index: number) => (
      <Item key={ingredient.id}>
        <NumberInput
          style={{ width: '100px' }}
          type="number"
          min={0}
          max={999}
          placeholder={'Quantity'}
          onChange={(ev) =>
            onChange({ index: index, field: 'quantity', value: Number(ev.target.value) })
          }
          required
        />

        <SelectDropdown
          selected={0}
          options={unitOptions}
          width={'150px'}
          placeholder={'Unit'}
          onChange={(val) => onChange({ index: index, field: 'unit', value: val.label })}
        />

        <CreatableSelect
          isClearable
          options={ingredientsOptions}
          width={'200px'}
          placeholder={'Type ingredient'}
          onChange={(val) =>
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
