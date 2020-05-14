import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ActionButton from 'components/Button/Action';
import CloseButton from 'components/Button/Close';

export interface IModalProps {
  title: string;
  message: string;
  show: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const modalStyles = {
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
  },
};

const TextContainer = styled.div`
  padding: 54px 18px 36px 18px;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: var(--font-size--large);
`;

const Text = styled.p`
  margin: 0;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 9px;
`;

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const ConfirmationModal = ({ show, onClose, onConfirm, title, message }: IModalProps) => {
  return (
    <div>
      <Modal isOpen={show} onRequestClose={onClose} style={modalStyles}>
        <CloseButton type="button" onClick={onClose}>
          x
        </CloseButton>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{message}</Text>
        </TextContainer>

        <ActionButtonsContainer>
          <ActionButton
            type="button"
            onClick={onClose}
            style={{ backgroundColor: 'var(--color--light-purple)' }}>
            Cancel
          </ActionButton>

          <ActionButton type="button" onClick={onConfirm}>
            Confirm
          </ActionButton>
        </ActionButtonsContainer>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
