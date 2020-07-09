import React, { Component } from "react";
import "./accountsetting.style.css"
import { AuthContext } from "../AuthContext"
import axios from "axios"

class AccountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      currentpassword: '',
      newpassword: '',
      confirmpassword: '',
      showingAlert: false,
      firstname: '',
      lastname: '',
      email: ''
    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastname = this.handleChangeLastname.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.saveChanges = this.saveChanges.bind(this)

    this.handleChangeCurrentPassword = this.handleChangeCurrentPassword.bind(this)
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this)
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  componentDidMount() {
    if (this.context.userinfo)
      this.setState({
        username: this.context.userinfo.username ? this.context.userinfo.username : '',
        email: this.context.userinfo.email ? this.context.userinfo.email : '',
        firstname: this.context.userinfo.firstname ? this.context.userinfo.firstname : '',
        lastname: this.context.userinfo.lastname ? this.context.userinfo.lastname : ''
      })
  }

  handleChangeFirstName(event) {
    this.setState({ firstname: event.target.value });
  }

  handleChangeLastname(event) {
    this.setState({ lastname: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  saveChanges(event) {
    event.preventDefault();
    const { firstname, lastname, email } = this.state;
    axios.put('/users/updateInfo', { firstname, lastname, email }).then(res => {
      this.context.setUserInfo(res.data)
      this.setState({
        showingAlert: true
      });
  
      setTimeout(() => {
        this.setState({
          showingAlert: false
        });
      }, 2000);
    }).catch(err => {
      console.log(err)
    })
  }

  handleChangeCurrentPassword(event) {
    this.setState({ currentpassword: event.target.value })
  }

  handleChangeNewPassword(event) {
    this.setState({ newpassword: event.target.value })
  }

  handleChangeConfirmPassword(event) {
    this.setState({ confirmpassword: event.target.value })
  }

  updatePassword(event) {
    event.preventDefault();
    const { currentpassword, newpassword, confirmpassword } = this.state;
    axios.put('/users/updatePassword', { currentpassword, newpassword, confirmpassword }).then(res => {
      this.setState({
        showingAlert: true
      });
      setTimeout(() => {
        this.setState({
          showingAlert: false
        });
      }, 2000);
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const {showingAlert} = this.state
    return (
      <>
      <div className={`alert alert-success showingAlert ${showingAlert ? "alert-active" : "alert-close"}`} style={{ width: 600, margin: "10px auto 0" }} role="alert">
        Your profile has been updated
      </div>
      <div className="g">
        <div className="g-b g-b--6of12 js-profile">
          <div>
            <h4 className="well">Account Details</h4>
            <form onSubmit={this.saveChanges} className="well well--b well--l" noValidate="novalidate">
              <div className="form-fieldset well well--b">
                <label
                  className="label label--fw well well--b well--xs "
                  htmlFor="form-ele-first_name"
                >
                  First Name
          </label>
                <input
                  className="input input--fw "
                  type="text"
                  onChange={this.handleChangeFirstName}
                  value={this.state.firstname}
                  id="form-ele-first_name"
                />
              </div>
              <div className="form-fieldset well well--b">
                <label
                  className="label label--fw well well--b well--xs "
                  htmlFor="form-ele-last_name"
                >
                  Last Name
          </label>
                <input
                  className="input input--fw "
                  type="text"
                  onChange={this.handleChangeLastname}
                  value={this.state.lastname}
                  id="form-ele-last_name"
                />
              </div>
              <div className="form-fieldset well well--b">
                <label
                  className="label label--fw well well--b well--xs "
                  htmlFor="form-ele-email"
                >
                  Email
          </label>
                <input
                  className="input input--fw "
                  type="text"
                  onChange={this.handleChangeEmail}
                  value={this.state.email}
                  id="form-ele-email"
                />
              </div>
              <div className="form-fieldset">
                <button type="submit" className="btn btn--a btn-warning js-submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
        <div className="g-b g-b--6of12 js-profile">
          <div>
            <h4 className="well">Change Password</h4>
            <form onSubmit={this.updatePassword} className="well well--b well--l" noValidate="novalidate">
              <div className="form-fieldset well well--b">
                <label
                  className="label label--fw well well--b well--xs "
                  htmlFor="form-ele-first_name"
                >
                  Current Password
          </label>
                <input
                  className="input input--fw "
                  type="password"
                  value={this.state.currentpassword}
                  onChange={this.handleChangeCurrentPassword}
                  id="form-ele-first_name"
                />
              </div>
              <div className="form-fieldset well well--b">
                <label
                  className="label label--fw well well--b well--xs "
                  htmlFor="form-ele-last_name"
                >
                  New Password
          </label>
                <input
                  className="input input--fw "
                  type="password"
                  value={this.state.newpassword}
                  onChange={this.handleChangeNewPassword}
                  id="form-ele-last_name"
                />
              </div>
              <div className="form-fieldset well well--b">
                <label
                  className="label label--fw well well--b well--xs "
                  htmlFor="form-ele-email"
                >
                  Confirm Password
          </label>
                <input
                  className="input input--fw "
                  type="password"
                  value={this.state.confirmpassword}
                  onChange={this.handleChangeConfirmPassword}
                  id="form-ele-email"
                />
              </div>
              <div className="form-fieldset">
                <button type="submit" className="btn btn-warning btn--a js-submit">
                  Update Password
          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
  }
}

AccountSetting.contextType = AuthContext;

export default AccountSetting