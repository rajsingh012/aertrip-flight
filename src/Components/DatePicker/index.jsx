import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = (props) => {
  const { selectedValuesHandler, name = "" } = props;

  const dateHandler = (date) => {
    selectedValuesHandler(date, name);
  };

  return (
    <DatePicker
      className="react_date"
      selected={new Date()}
      onChange={(date) => dateHandler(date)}
    />
  );
};

export default DatePickerComponent;
