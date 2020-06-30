import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.styles.css";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Typing.</h1>
        <p>Practice</p>
      </div>

      <div className="logo-image">
        <div className="wrapper">
          <img className="logo-wrapper" alt="logo" src={logo1}></img>
          <img className="logo-content" alt="logo" src={logo2}></img>
        </div>
      </div>
      <div className="menu">
        <NavLink
          tag={Link}
          className="menu-item"
          activeClassName="underline"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          tag={Link}
          className="menu-item"
          activeClassName="underline"
          exact
          to={"/lessons/5ef9a26528aab015a45c2fa4"}
        >
          Lessons
        </NavLink>
        <NavLink
          tag={Link}
          className="menu-item"
          activeClassName="underline"
          exact
          to={localStorage.getItem("user") ? "/logout" : "/login"}
        >
          {localStorage.getItem("user") ? "Logout" : "Login"}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
