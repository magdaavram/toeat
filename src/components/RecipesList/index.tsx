import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecipeThumbnail from 'components//RecipeThumbnail';
import Recipe, { IRecipe } from 'api/Recipe';
import ActionButton from 'components/Button/Action';
import FiltersModal, { IFilterModalProps } from 'components//Modal/FiltersModal';

const Container = styled.div`
  width: 70%;
  max-width: 1000px;
  margin-top: 18px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FilterButton = styled(ActionButton)`
  width: 108px;
  display: flex;
  justify-content: space-between;
`;

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 54px 36px;
  padding-top: 27px;
`;

const RecipesList = () => {
  const api = new Recipe();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setPage(page + 1);
  };

  const loadRecipes = () => {
    const newRecipes = api.getRecipes(page, 6);

    if (newRecipes.length === 0) {
      return;
    }

    setRecipes((existingRecipes) => [...existingRecipes, ...newRecipes]);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  };

  useEffect(loadRecipes, [page]);

  const recipesList = recipes.map((recipe, index) => (
    <RecipeThumbnail
      imageUrl={recipe.imageUrl}
      title={recipe.title}
      duration={recipe.duration}
      difficultyLevel={recipe.difficultyLevel}
      key={`recipe-${index}`}
    />
  ));

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalData: IFilterModalProps = {
    title: 'Filter recipes',
    show: modalIsOpen,
    onClose: closeModal,
  };

  return (
    <Container>
      <FilterContainer>
        <FilterButton
          onClick={openModal}
          text={"Filter"}
          hasIcon={true}
          icon={"filter"}
          iconWidth={20}
          iconHeight={20}
        />

        <FiltersModal {...modalData} />
      </FilterContainer>
      <RecipesContainer>{recipesList}</RecipesContainer>
    </Container>
  );
};

export default RecipesList;
