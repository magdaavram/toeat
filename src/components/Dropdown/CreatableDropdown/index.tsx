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
  onChange?: (option: Option) => void;
}

const CreatableSelect = (props: IProps) => {
  const { onChange, ...rest } = props;
  const handleChange = onChange
    ? (value: any) => {
        const option: Option = { value: value.value, label: value.label };
        onChange(option);
      }
    : undefined;

  return <Creatable onChange={handleChange} {...rest} styles={styles} />;
};

export default CreatableSelect;
