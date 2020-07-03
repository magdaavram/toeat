import React, { useState, useContext, useEffect } from 'react';
import Button from 'components/Button';
import styled from 'styled-components';
import ConfirmationModal, { IModalProps } from 'components/Modal/ConfirmationModal';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import RecipeContext from 'RecipeContext';
import Recipe from 'api/Recipe';

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
  const api = new Recipe();

  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const deleteRecipe = () => {
    api
      .deleteRecipe(recipeId)
      .then(() => {})
      .catch((err) => setError(err));

    setDeleted(true);
    closeModal();
  };
  console.log(deleted);
  const modalData: IModalProps = {
    title: 'Delete recipe',
    message: 'Are you sure you want to permanently delete this recipe?',
    show: modalIsOpen,
    onClose: closeModal,
    onConfirm: deleteRecipe,
  };

  useEffect(() => {
    setDeleted(false);
  }, [deleted]);

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
            {deleted && <Redirect to={'/'} />}
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
