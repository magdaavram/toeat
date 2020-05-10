import React, { CSSProperties } from 'react';
import Select from 'react-select';

export type Option = {
  value: number;
  label: string;
};

interface IProps {
  selected: number;
  placeholder?: string;
  options: Option[];
  width: string;
  margin?: string;
}

const styles = {
  option: (provided: CSSProperties, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    backgroundColor: isSelected ? 'rgb(110, 37, 52, 0.1)' : 'var(--color--beige)',
    fontSize: 'var(--font-size--small)',
    fontWeight: isSelected ? 700 : 400,
    color: 'var(--color--dark-purple)',

    '&:hover': {
      backgroundColor: 'var(--color--medium-purple)',
      color: 'var(--color--beige)',
    },
  }),
  menu: (provided: CSSProperties, { selectProps }: { selectProps: IProps }) => ({
    ...provided,
    backgroundColor: 'var(--color--beige)',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '3px',
    width: selectProps.width,
    fontFamily: 'Roboto Regular',
  }),
  container: (provided: CSSProperties, { selectProps }: { selectProps: IProps }) => ({
    ...provided,
    width: selectProps.width,
    border: '1px solid var(--color--light-purple)',
    borderRadius: '3px',
    margin: selectProps.margin,
    fontFamily: 'Roboto Regular',
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

const Dropdown = (props: IProps) => {
  const { selected, options, placeholder, width, margin } = props;
  const selectedValue = options.find((item: Option) => item.value === selected);

  return (
    <>
      <Select
        options={options}
        styles={styles}
        width={width}
        margin={margin}
        placeholder={placeholder}
        defaultValue={selectedValue}
      />
    </>
  );
};

export default Dropdown;
