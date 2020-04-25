import React from 'react';
import Button from '../Button';
import AddIcon from '../../assets/icons/Add';
import DeleteIcon from '../../assets/icons/Delete';
import EditIcon from '../../assets/icons/Edit';
import styled from 'styled-components';

const ButtonWithIcon = styled(Button)`
  margin-left: 9px;
  border-radius: 50%;

  :hover {
    opacity: 0.9;
  }
`;

const TopControls = () => (
  <div>
    <ButtonWithIcon onClick={() => console.log('pressed add')}>
      <AddIcon />
    </ButtonWithIcon>

    <ButtonWithIcon onClick={() => console.log('pressed delete')}>
      <DeleteIcon />
    </ButtonWithIcon>

    <ButtonWithIcon onClick={() => console.log('pressed edit')}>
      <EditIcon />
    </ButtonWithIcon>
  </div>
);

export default TopControls;
