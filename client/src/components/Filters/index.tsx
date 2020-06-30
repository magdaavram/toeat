import React, { useState } from 'react';
import styled from 'styled-components';
import ActionButton from 'components/Button/Action';
import FiltersModal, { IFilterModalProps } from 'components/Filters/FiltersModal';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(ActionButton)`
  width: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filters = () => {
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
      <Button
        onClick={openModal}
        text={'Filter'}
        hasIcon={true}
        icon={'filter'}
        iconWidth={20}
        iconHeight={20}
      />

      <FiltersModal {...modalData} />
    </Container>
  );
};

export default Filters;
