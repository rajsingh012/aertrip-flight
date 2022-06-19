import React, { useState } from "react";
import Select from "./../Select/index";
import DatePicker from "../DatePicker";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [inputData, setInputData] = useState({});
  let history = useHistory();
  const selectedValuesHandler = (values, name) => {
    setInputData({
      ...inputData,
      [name]: values,
    });
  };

  const onclickHanlder = () => {
    const {
      origin = "",
      destination = "",
      travelDate = "",
      return: returnDate = "",
      pax = "",
    } = inputData;
    return history.push("/search", { replace: true });
  };

  return (
    <div className="searchbar_boxWrap">
      <div className="searchbar_list">
        <Select
          className={"react-selectBox"}
          selectedValuesHandler={selectedValuesHandler}
          name="origin"
          placeholder={"Select Origin"}
        />
        <Select
          className={"react-selectBox"}
          selectedValuesHandler={selectedValuesHandler}
          name="destination"
          placeholder={"Select Destination"}
        />
      </div>
      <div className="searchbar_list">
        <DatePicker
          selectedValuesHandler={selectedValuesHandler}
          name="travelDate"
        />
        <DatePicker
          selectedValuesHandler={selectedValuesHandler}
          name="return"
        />
      </div>
      <div className="searchbar_list searchbar_listPax">
        <input
          type="number"
          className="react_date"
          placeholder="Select Pax"
          onChange={(e) => selectedValuesHandler(e.target.value, "pax")}
          name="pax"
        />
      </div>
      <div className="searchbar_list searchbar_listBtn">
        <button className="submit_btn" onClick={onclickHanlder}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
