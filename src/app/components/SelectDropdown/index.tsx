import React from 'react';
import Select from 'react-select';
import styles, { IProps, Option } from '../Dropdown';

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
