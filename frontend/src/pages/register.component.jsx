import React, { Component } from "react";
import API from "../api";
import { Redirect, withRouter } from "react-router-dom";
import "./loginpage.style.css";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3>hello</h3>
      </>
    );
  }
}

export default withRouter(Register);
