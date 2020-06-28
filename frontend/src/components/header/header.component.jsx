import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item" to="/lessons">
          Lessons
        </Link>
        <Link className="menu-item" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
