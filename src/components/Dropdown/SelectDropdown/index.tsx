import React from 'react';
import Select from 'react-select';
import styles, { IProps, Option } from 'components/Dropdown';

const SelectDropdown = (props: IProps) => {
  const { selected, ...rest } = props;
  const selectedValue = rest.options.find((item: Option) => item.value === selected);

  return (
    <>
      <Select styles={styles} {...rest} defaultValue={selectedValue} />
    </>
  );
};

export default SelectDropdown;
