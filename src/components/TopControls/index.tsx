import React, { useState, useContext } from 'react';
import Button from 'components/Button';
import styled from 'styled-components';
import ConfirmationModal, { IModalProps } from 'components/Modal/ConfirmationModal';
import { Link, Route, Switch } from 'react-router-dom';
import RecipeContext from 'RecipeContext';

const ButtonsContainer = styled.div`
  display: flex;
`;

const TopButton = styled(Button)`
  margin-left: 9px;
  border-radius: 50%;

  :hover {
    opacity: 0.9;
  }
`;

const buttonProps = {
  hasIcon: true,
  iconWidth: 50,
  iconHeight: 50,
  className: 'top-icon',
};

const TopControls = () => {
  const { id: recipeId } = useContext(RecipeContext);

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
      <Switch>
        <Route exact path="/">
          <div>
            <Link to="/add-recipe">
              <TopButton icon={'add'} {...buttonProps} />
            </Link>
          </div>
        </Route>

        <Route path="/recipe">
          <div>
            <TopButton onClick={openModal} icon={'delete'} {...buttonProps} />
            <ConfirmationModal {...modalData} />
          </div>

          <div>
            <Link to={'/edit-recipe/' + recipeId}>
              <TopButton icon={'edit'} {...buttonProps} />
            </Link>
          </div>
        </Route>
      </Switch>
    </ButtonsContainer>
  );
};

export default TopControls;
