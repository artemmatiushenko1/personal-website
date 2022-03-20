import { default as ReactSelect } from 'react-select';

const customStyles = {
  option: (provided, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? '#fff' : 'transparent',
    color: '#000',
    fontWeight: isSelected ? '600' : '400',
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: !isSelected ? '#f1f2f6' : 'none',
    },
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    width: 135,
    borderRadius: 50,
    border: 'none',
    backgroundColor: '#fff',
    boxShadow: 'none',
    cursor: 'pointer',
    outline: isFocused ? 'none' : 'none',

    ':hover': {
      borderColor: isFocused ? '#fff' : 'rgba(255, 255, 255, 0.6)',
    },
    '@media screen and (max-width: 500px)': {
      width: '100%',
    },
  }),
  container: (provided) => ({
    ...provided,
    '@media screen and (max-width: 500px)': {
      width: '100%',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#202020',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'none',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 15px',
  }),
  dropdownIndicator: (provided, { isFocused }) => ({
    ...provided,
    transition: 'all .3s ease',
    transform: isFocused ? 'rotate(180deg)' : null,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#202020',
  }),
};

const Select = ({ options, placeholder, value, onChange, instanceId }) => {
  return (
    <ReactSelect
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      options={options}
      isSearchable={false}
      styles={customStyles}
      instanceId={instanceId}
    />
  );
};

export default Select;
