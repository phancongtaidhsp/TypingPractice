import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.styles.css";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
import { AuthContext } from "../../AuthContext";

const Header = (props) => {
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
          to={"/lessons"}
        >
          Lessons
        </NavLink>
        <AuthContext.Consumer>
          {({ auth, setAuth, userinfo}) => (
            userinfo ?
              <div className="dropdown">
                <a href="#" className="menu-item dropbtn">{userinfo.firstname ? userinfo.firstname : userinfo.username}</a>
                <div className="dropdown-content">
                  <NavLink
                    tag={Link}
                    activeClassName="underline"
                    exact
                    to={"/account"}
                  >
                    Account Setting
                  </NavLink>
                  <NavLink
                    tag={Link}
                    activeClassName="underline"
                    exact
                    to={"/logout"}
                    onClick={() => {
                      auth && setAuth(false);
                    }}
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
              : 
              <NavLink
                tag={Link}
                className="menu-item"
                activeClassName="underline"
                exact
                to={"/login"}
              >
                Login
              </NavLink>
          )}
        </AuthContext.Consumer>
      </div>
    </div>
  );
};

export default Header;
