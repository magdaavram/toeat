import React from 'react';
import Creatable from 'react-select/creatable';
import styles, { Option } from 'components/Dropdown/index';

interface IProps {
  width?: string;
  margin?: string;
  backgroundColor?: string;
  placeholder?: string;
  options: Option[];
  isClearable?: boolean;
  isMulti?: boolean;
  onChange?: (option: Option | null) => void;
}

const CreatableSelect = ({ onChange, ...rest }: IProps) => {
  const handleChange = onChange
    ? (value: any, action: any) => {
        if (action.action === 'clear') {
          onChange(null);
        } else {
          const option: Option = { value: value.value, label: value.label };
          onChange(option);
        }
      }
    : undefined;

  return <Creatable onChange={handleChange} {...rest} styles={styles} />;
};

export default CreatableSelect;
