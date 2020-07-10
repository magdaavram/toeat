import styled from 'styled-components';
import ActionButton from 'components/Button/Action';

export const Form = styled.form`
  width: 70%;
  max-width: 700px;
`;

export const DetailsContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const AddItemsContainer = styled.div`
  margin: 18px 0;
  background-color: rgba(201, 173, 167, 0.3);
  padding: 18px;
  border-radius: 12px;
`;

export const Subtitle = styled.h3`
  font-size: var(--font-size--large);
  font-weight: normal;
  margin: 0 0 18px 0;
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 9px;

  & > *:not(:last-child) {
    margin-right: 9px;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 9px 0;
`;

export const CancelButton = styled(ActionButton)`
  background-color: var(--color--light-purple);
`;
