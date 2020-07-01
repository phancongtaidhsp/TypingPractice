import React, { Component } from "react";
import API from "../api";
import { Redirect, withRouter } from "react-router-dom";
import "./register.styles.css";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container-fluid regisPage">
          <div className="row">
            <div className="col-4 regisPreview">
              <div className="headerPreview d-flex align-items-center justify-content-between">
                <h1 className="tileRegis">
                  Typing <span>.Practice</span>
                </h1>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-heart-fill"
                  className="iconRegis"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
              <h2 className="subtileRegis">
                Prepare Your Students for Their Future
              </h2>
              <div className="bodyPreview">
                <p>
                  Manage, track, and report on student progress quickly and
                  easily. Unlimited students, unlimited classes, unlimited
                  teachers, unlimited schools. Typing Practice is completely
                  FREE!
                </p>
              </div>
              <div className="bottomPreview d-flex align-items-center justify-content-between">
                <p>You have a account?</p>
                <button>Sing In</button>
              </div>
            </div>
            <div className="col-8 regisMain">
              <h1 className="titleMain">User Signup</h1>
              <form action="" className="formRegis">
                <div className="rowRegis d-flex flex-column">
                  <label className="labelForm">
                    Username <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div className="rowRegis d-flex flex-column">
                  <label className="labelForm">Email</label>
                  <input type="text" />
                </div>
                <div className="rowRegis d-flex flex-column">
                  <label className="labelForm">
                    Password <span>*</span>
                  </label>
                  <input type="Password" />
                </div>
                <div className="botMain d-flex align-items-start">
                  <p>Brought to you by Marines Team</p>
                  <button>Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Register);
