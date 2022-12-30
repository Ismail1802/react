import React from "react";
import "./NavBar.css";

const NavBar = ({ openMenu }) => {
  return (
    <nav className={"navik " + openMenu ? "navik " : "none"}>
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
  );
};

export default NavBar;
