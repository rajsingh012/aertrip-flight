import React, { Component, Fragment } from "react";
import SearchBar from "./../Components/SearchBar/";
import ListingContainer from "./ListingContainer";

class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="searchbar_mainBox">
          <SearchBar />
        </div>
        <ListingContainer />
      </Fragment>
    );
  }
}
export default HomeContainer;
