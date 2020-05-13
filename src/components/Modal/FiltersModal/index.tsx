import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import CloseButton from 'components/Button/Close';
import ActionButton from 'components/Button/Action';
import { Option } from 'components/Dropdown';
import {
  getIngredients,
  getCookingTime,
  getCourses,
  getDifficultyLevels,
  getNumberOfIngredients,
} from 'api/dropdownData';
import SelectDropdown from 'components/Dropdown/SelectDropdown';

export interface IFilterModalProps {
  title: string;
  show: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const styles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -40%)',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '6px',
    padding: '27px',
    width: '80%',
    maxWidth: '800px',
  },
};

const Content = styled.div`
  padding: 54px 18px 36px 18px;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: var(--font-size--large);
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
  padding: 0 10%;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 9px;
`;

const ingredientsOptions: Option[] = getIngredients().map((item) => {
  return { value: item.id, label: item.name };
});

const cookingTimeOptions: Option[] = getCookingTime().map((item) => {
  return { value: item.id, label: item.name };
});

const coursesOptions: Option[] = getCourses().map((item) => {
  return { value: item.id, label: item.name };
});

const difficultyOptions: Option[] = getDifficultyLevels().map((item) => {
  return { value: item.id, label: item.name };
});

const numberOfIngredientsOptions: Option[] = getNumberOfIngredients().map((item) => {
  return { value: item.id, label: item.name };
});

const FiltersModal = ({ show, onClose, onConfirm, title }: IFilterModalProps) => {
  const filterStyle = {
    margin: '0 0 18px 0',
    backgroundColor: '#fff',
    labelColor: '#fff',
  };

  return (
    <div>
      <Modal isOpen={show} onRequestClose={onClose} style={styles}>
        <CloseButton type="button" onClick={onClose}>
          x
        </CloseButton>

        <Content>
          <Title>{title}</Title>
          <FiltersContainer>
            <SelectDropdown
              isMulti
              {...filterStyle}
              options={ingredientsOptions}
              selected={0}
              placeholder={'Ingredients on hand'}
            />

            <SelectDropdown
              isMulti
              {...filterStyle}
              options={ingredientsOptions}
              selected={0}
              placeholder={'Disliked ingredients'}
            />

            <SelectDropdown
              {...filterStyle}
              options={cookingTimeOptions}
              selected={0}
              placeholder={'Cooking time'}
            />

            <SelectDropdown
              isMulti
              {...filterStyle}
              options={coursesOptions}
              selected={0}
              placeholder={'Course meal'}
            />

            <SelectDropdown
              isMulti
              {...filterStyle}
              options={difficultyOptions}
              selected={0}
              placeholder={'Difficulty'}
            />

            <SelectDropdown
              {...filterStyle}
              options={numberOfIngredientsOptions}
              selected={0}
              placeholder={'Number of ingredients'}
            />
          </FiltersContainer>
        </Content>

        <ActionButtonsContainer>
          <ActionButton
            type="button"
            onClick={onClose}
            style={{ backgroundColor: 'var(--color--light-purple)' }}>
            Cancel
          </ActionButton>

          <ActionButton type="button" onClick={onConfirm}>
            Apply
          </ActionButton>
        </ActionButtonsContainer>
      </Modal>
    </div>
  );
};

export default FiltersModal;
