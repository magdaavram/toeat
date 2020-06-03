import { CSSProperties } from 'react';

export type Option = {
  value: number;
  label: string;
};

export interface IProps {
  selected: number;
  placeholder?: string;
  options: Option[];
  width?: string;
  margin?: string;
  labelColor?: string;
  backgroundColor?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option) => void;
}

const dropdownStyles = {
  option: (
    provided: CSSProperties,
    { isSelected, selectProps }: { isSelected: boolean; selectProps: IProps }
  ) => ({
    ...provided,
    backgroundColor: isSelected
      ? 'rgb(110, 37, 52, 0.1)'
      : selectProps.backgroundColor || 'var(--color--beige)',
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
    backgroundColor: selectProps.backgroundColor || 'var(--color--beige)',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '3px',
    width: selectProps.width || '100%',
    fontFamily: 'Roboto Regular',
  }),
  container: (provided: CSSProperties, { selectProps }: { selectProps: IProps }) => ({
    ...provided,
    width: selectProps.width || '100%',
    border: '1px solid var(--color--light-purple)',
    borderRadius: '3px',
    margin: selectProps.margin,
    fontFamily: 'Roboto Regular',
  }),
  control: (provided: CSSProperties, { selectProps }: { selectProps: IProps }) => ({
    ...provided,
    backgroundColor: selectProps.backgroundColor || 'var(--color--beige)',
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
  multiValue: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: 'rgba(110, 37, 52, 0.3)',
    marginRight: '6px',
    borderRadius: '3px',
  }),
  multiValueLabel: (provided: CSSProperties, { selectProps }: { selectProps: IProps }) => ({
    ...provided,
    color: selectProps.labelColor || 'var(--color--beige)',
    paddingLeft: '9px',
    paddingRight: '6px',
  }),
  multiValueRemove: (provided: CSSProperties, { selectProps }: { selectProps: IProps }) => ({
    ...provided,
    color: selectProps.labelColor || 'var(--color--beige)',

    ':hover': {
      backgroundColor: 'rgba(110, 37, 52, 0.2)',
      opacity: 1,
    },
  }),
};

export default dropdownStyles;
