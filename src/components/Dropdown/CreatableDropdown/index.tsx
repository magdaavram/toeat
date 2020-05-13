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
}

const CreatableSelect = (props: IProps) => {
  return <Creatable {...props} styles={styles} />;
};

export default CreatableSelect;
