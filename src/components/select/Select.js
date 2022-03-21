import { default as ReactSelect } from 'react-select';
import { customStyles } from './Select.style';

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
