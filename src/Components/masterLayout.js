import React, { Fragment } from "react";
import Header from "./Header";

const MasterLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export default MasterLayout;
