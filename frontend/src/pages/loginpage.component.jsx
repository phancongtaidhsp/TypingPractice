import React, { Component } from "react";
import API from "../api";
import { Redirect, withRouter } from "react-router-dom";
import "./loginpage.style.css";
import auth from "../auth.js";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    API.post(`auth/login`, { username, password })
      .then((res) => {
        const user = res.data;
        localStorage.setItem("user", user);
        auth.login(() => {
          this.props.history.push(`${localStorage.getItem("pathname")}`);
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <div className="login-wrapper">
          <section className="login-main">
            <div>
              <div className="login-logo">
                <a href="/">
                  <span className="login-logo_text">typing</span>
                  <span className="login-logo_text_small">.practice</span>
                </a>
              </div>
              <div className="login-signup-group">
                <span className="login-text-gray">Don't have an account?</span>
                <button
                  type="button"
                  className="login-btn btn-warning btn-base"
                >
                  Sign Up Free!
                </button>
              </div>
            </div>
            <div className="login-form-login">
              <h3 className="login-title">Student Login</h3>
              <div className="login-group-autho-btn">
                <div className="login-autho-btn">
                  <div className="login-brand_logo">
                    <img
                      className="login-autho_brand_img"
                      src="service-google.svg"
                      alt
                    />
                  </div>
                  <span className="login-autho_brand_text">
                    Log in with Google
                  </span>
                </div>
              </div>
              <div className="login-eke">
                <span className="login-or">OR</span>
              </div>
              <form onSubmit={this.handleSubmit} className="login-form-login">
                <label className="login-username_lable" htmlFor="username">
                  Username or Email
                </label>
                <input
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                  id="username"
                  className="login-username_input input input--fw sessionInput"
                  name="username"
                  type="text"
                />
                <label className="login-username_lable" htmlFor="password">
                  Password
                </label>
                <input
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  type="password"
                  id="password"
                  className="login-username_input input input--fw sessionInput"
                  name="password"
                />
              </form>
              <a href="#" className="login-forgot-login">
                Forgot your login info?
              </a>
              <div className="login-eke" />
              <div className="login-pillar">
                <div className="login-group-dot"></div>
                <button
                  onClick={this.handleSubmit}
                  type="button"
                  className="login-btn-next btn btn-warning btn-base btn-large"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
        ;
      </>
    );
  }
}

export default withRouter(LoginPage);
