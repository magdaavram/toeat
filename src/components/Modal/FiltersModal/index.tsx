import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import CloseButton from 'components/Button/Close';
import ActionButton from 'components/Button/Action';

export interface IFilterModalProps {
  title: string;
  show: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  filters: { key: number; value: string }[];
}

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '6px',
    padding: '27px',
    width: '80%',
    maxWidth: '700px',
  },
};

const TextContainer = styled.div`
  padding: 54px 18px 36px 18px;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: var(--font-size--large);
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 9px;
`;

const FiltersModal = ({ show, onClose, onConfirm, title }: IFilterModalProps) => {
  return (
    <div>
      <Modal isOpen={show} onRequestClose={onClose} style={styles}>
        <CloseButton type="button" onClick={onClose}>
          x
        </CloseButton>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>

        <ActionButtonsContainer>
          <ActionButton
            type="button"
            onClick={onClose}
            style={{ backgroundColor: 'var(--color--light-purple)' }}>
            Cancel
          </ActionButton>

          <ActionButton type="button" onClick={onConfirm}>
            Filter
          </ActionButton>
        </ActionButtonsContainer>
      </Modal>
    </div>
  );
};

export default FiltersModal;
