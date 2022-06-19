import React, { Fragment } from "react";
import Logo from "./logo";
import Menubar from "./menubar";
import Login from "./Login";

const Header = () => {
  return (
    <header className="header_wrapper">
      <Logo />
      <Menubar />
      <Login />
    </header>
  );
};

export default Header;
