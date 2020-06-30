import React, { Component } from "react";
import "./loginpage.styles.css";
import API from "../api";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    API.post(`auth/login`,this.state)
    .then((res) => {
      const text = res.data;
      if(text){
      }
      else{
        
      }
    })
    .catch((error) => console.log(error));
    event.preventDefault();
  }

  componentDidMount = async () => {
    API.post(`auth/login`)
      .then((res) => {
        const text = res.data;
        this.setState({ text: text });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <section className="main">
            <div className="header">
              <div className="logo">
                <a href="/">
                  <span className="logo_text">typing</span>
                  <span className="logo_text_small">.practice</span>
                </a>
              </div>
              <div className="signup-group">
                <span className="text-gray">Don't have an account?</span>
                <button type="button" className="btn btn-warning btn-base">
                  Sign Up Free!
                </button>
              </div>
            </div>
            <div className="form-login">
              <h3 className="title">Student Login</h3>
              <div className="group-autho-btn">
                <div className="autho-btn">
                  <div className="brand_logo">
                    <img className="autho_brand_img" src="service-google.svg" alt />
                  </div>
                  <span className="autho_brand_text">Log in with Google</span>
                </div>
              </div>
              <div className="eke">
                <span className="or">OR</span>
              </div>
              <form onSubmit={this.handleSubmit} className="form-login">
                <label className="username_lable" htmlFor="username">
                  Username or Email
                </label>
                <input
                  value={this.state.username}
                  onChange={this.handleChangeUsername}
                  id="username"
                  className="username_input input input--fw sessionInput"
                  name="username"
                  type="text"
                />
                <label className="username_lable" htmlFor="password">
                  Password
                </label>
                <input
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  type="password"
                  id="password"
                  className="username_input input input--fw sessionInput"
                  name="password"
                />
              </form>
              <a href="#" className="forgot-login">
                Forgot your login info?
              </a>
              <div className="eke" />
              <div className="pillar">
                <div className="group-dot"></div>
                <button
                  onClick={submitForm}
                  type="button"
                  className="btn-next btn btn-warning btn-base btn-large"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>;

      </>
    );
  }
}

export default HomePage;
