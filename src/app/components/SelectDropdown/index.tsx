import React, { CSSProperties } from 'react';
import Select from 'react-select';

export type Option = {
  value: number;
  label: string;
};

const styles = {
  option: (provided: CSSProperties, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    backgroundColor: 'var(--color--beige)',
    fontSize: 'var(--font-size--small)',
    fontWeight: isSelected ? 700 : 400,
    color: 'var(--color--dark-purple)',

    '&:hover': {
      backgroundColor: 'var(--color--medium-purple)',
      color: 'var(--color--beige)',
    },
  }),
  menu: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: 'var(--color--beige)',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '3px',
    width: '300px',
  }),
  container: (provided: CSSProperties) => ({
    ...provided,
    width: '300px',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '3px',
  }),
  control: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: 'var(--color--beige)',
    border: 0,
    boxShadow: 'none',
  }),
  indicatorSeparator: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: 'var(--color--light-purple)',
  }),
  dropdownIndicator: (provided: CSSProperties) => ({
    ...provided,
    color: 'var(--color--medium-purple)',
  }),
};

const Dropdown = ({ selected, options }: { selected: number; options: Option[] }) => {
  const selectedValue = options.find((item: Option) => item.value === selected);

  return (
    <>
      <Select options={options} styles={styles} defaultValue={selectedValue} />
    </>
  );
};

export default Dropdown;
