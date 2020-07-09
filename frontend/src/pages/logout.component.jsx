import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../AuthContext";

class LogoutPage extends Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    axios.get('/auth/logout')
      .then((res) => {
        this.context.setAuth(false)
        this.context.setUserInfo(null)
      })
      .catch((error) => console.log(error));
  }

  render(){
    const { isLogout } = this.context.auth
    if(isLogout) return <h1> Waiting... </h1>
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
}

LogoutPage.contextType = AuthContext

export default LogoutPage;
