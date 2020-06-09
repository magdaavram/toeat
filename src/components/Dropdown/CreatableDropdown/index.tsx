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
  onChange?(option: Option | Option[] | null): void;
}

const CreatableSelect = ({ onChange, ...rest }: IProps) => {
  const handleChange = onChange
    ? (value: any, action: any) => {
        if (action.action === 'clear') {
          onChange(null);
        } else {
          onChange(value);
        }
      }
    : undefined;

  return <Creatable onChange={handleChange} {...rest} styles={styles} />;
};

export default CreatableSelect;
