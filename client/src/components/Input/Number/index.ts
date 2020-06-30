import styled from 'styled-components';
import Input from 'components/Input/index';

const NumberInput = styled(Input)`
  width: 150px;
  height: 40px;
  padding: 0 9px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;

NumberInput.displayName = 'NumberInput';

export default NumberInput;
