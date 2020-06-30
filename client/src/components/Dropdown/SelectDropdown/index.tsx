import React from 'react';
import Select from 'react-select';
import styles, { IProps, Option } from 'components/Dropdown';

const SelectDropdown = (props: IProps) => {
  const { selected, onChange, ...rest } = props;
  const selectedValue = rest.options.find((item: Option) => item.value === selected);

  const handleChange = onChange
    ? (value: any) => {
        const option: Option = { value: value.value, label: value.label };
        onChange(option);
      }
    : undefined;

  return (
    <>
      <Select styles={styles} onChange={handleChange} {...rest} defaultValue={selectedValue} />
    </>
  );
};

export default SelectDropdown;
