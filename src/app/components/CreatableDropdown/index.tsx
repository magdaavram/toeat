import React, { CSSProperties } from 'react';
import Creatable from 'react-select/creatable';
import styles, { Option } from '../Dropdown';

interface IProps {
  width: string;
  placeholder?: string;
  options: Option[];
  isClearable?: boolean;
  isMulti?: boolean;
}

const creatableStyles = {
  ...styles,
  multiValue: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: 'rgba(110, 37, 52, 0.3)',
    marginRight: '6px',
    borderRadius: '3px',
  }),
  multiValueLabel: (provided: CSSProperties) => ({
    ...provided,
    color: 'var(--color--beige)',
    paddingLeft: '9px',
    paddingRight: '6px',
  }),
  multiValueRemove: (provided: CSSProperties) => ({
    ...provided,
    color: 'var(--color--beige)',

    ':hover': {
      backgroundColor: 'rgba(110, 37, 52, 0.2)',
      opacity: 1,
    },
  }),
};

const CreatableSelect = (props: IProps) => {
  return <Creatable {...props} styles={creatableStyles} />;
};

export default CreatableSelect;
