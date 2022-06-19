import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { ListingContainer, HomeContainer } from "./LoadableContainers";

import Root from "./../Components/RouteComponents/";
import Constants from "../Constants/routes";
const RootContainer = (props) => <Root {...props} />;

const mapStateToProps = (state) => {
  const {} = state;

  var pathMapping = [Constants.SEARCH, Constants.FLIGHT_SEARCH];
  var urlMapping = {
    [Constants.SEARCH]: HomeContainer,
    [Constants.FLIGHT_SEARCH]: ListingContainer,
  };

  return {
    paths: pathMapping,
    routes: urlMapping,
  };
};

const AppContainer = withRouter(connect(mapStateToProps)(RootContainer));

export default AppContainer;
