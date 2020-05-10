import { CSSProperties } from 'react';

export type Option = {
  value: number;
  label: string;
};

export interface IProps {
  selected: number;
  placeholder?: string;
  options: Option[];
  width: string;
  margin?: string;
}

const dropdownStyles = {
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

export default dropdownStyles;
