import React, { useState } from "react";
import logo from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import classes from "./Header.module.css";
import "./NavBar.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuClickHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <img
        onClick={openMenuClickHandler}
        className={classes.menu}
        src={menuIcon}
        alt="icon-menu"
      />
      <nav className={openMenu ? "navik" : "navik none"}>
        <div className="header_links">
          <h3>Features</h3>
          <h3>Pricing</h3>
          <h3>Resources</h3>
        </div>
        <hr />
        <div className="logger">
          <h3>Login</h3>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
