import React from "react";
import Select from "react-select";

const options = [
  {
    value: "DEL",
    label: "Delhi, IN - Indira Gandhi International Airport (DEL)",
  },
  { value: "AGR", label: "Agra, IN - Kheria Airport (AGR)" },
  { value: "DED", label: "Dehra Dun, IN - Dehra Dun Airport (DED)" },
  { value: "BEK", label: "Bareilly, IN - Bareilly Airport (BEK)" },
  { value: "JAI", label: "Jaipur, IN - Jaipur Airport (JAI)" },
  { value: "IXC", label: "Chandigarh, IN - Chandigarh Airport (IXC)" },
];

const SelectBox = (props) => {
  const {
    className = "",
    selectedValuesHandler,
    name = "",
    placeholder = "",
  } = props;

  const handleChange = (selectedOption) => {
    selectedValuesHandler(selectedOption.value, name);
  };

  return (
    <Select
      options={options}
      className={className}
      classNamePrefix="react-flght"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default SelectBox;
