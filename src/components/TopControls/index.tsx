import React, { useState } from 'react';
import Button from 'components/Button';
import AddIcon from 'assets/icons/Add';
import DeleteIcon from 'assets/icons/Delete';
import EditIcon from 'assets/icons/Edit';
import styled from 'styled-components';
import ConfirmationModal, { IModalProps } from 'components/Modal/ConfirmationModal';
import { Link } from 'react-router-dom';

const ButtonsContainer = styled.div`
  display: flex;
`;

const ButtonWithIcon = styled(Button)`
  margin-left: 9px;
  border-radius: 50%;

  :hover {
    opacity: 0.9;
  }
`;

const TopControls = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalData: IModalProps = {
    title: 'Delete recipe',
    message: 'Are you sure you want to permanently delete this recipe?',
    show: modalIsOpen,
    onClose: closeModal,
  };

  return (
    <ButtonsContainer>
      <div>
        <Link to="/add-recipe">
          <ButtonWithIcon onClick={() => console.log('pressed add')}>
            <AddIcon />
          </ButtonWithIcon>
        </Link>
      </div>

      <div>
        <ButtonWithIcon onClick={openModal}>
          <DeleteIcon />
        </ButtonWithIcon>
        <ConfirmationModal {...modalData} />
      </div>

      <div>
        <Link to="/edit-recipe">
          <ButtonWithIcon onClick={() => console.log('pressed edit')}>
            <EditIcon />
          </ButtonWithIcon>
        </Link>
      </div>
    </ButtonsContainer>
  );
};

export default TopControls;
