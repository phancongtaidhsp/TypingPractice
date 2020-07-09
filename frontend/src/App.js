import React, { Component } from "react";
import "./App.css";
import LessonPage from "./pages/lessonpage.component";
import LessonDetail from "./pages/lessondetail.component";
import LoginPage from "./pages/loginpage.component";
import LogoutPage from "./pages/logout.component";
import AdminPage from "./pages/adminpage.component"
import HomePage from "./pages/homepage.component"
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import Cookies from 'js-cookie';
import ProtectedSignUpRoute from "./protectedSignUp.route";
import Register from "./pages/register.component";
import { AuthContext } from "./AuthContext";
import { LessonsContext } from "./LessonsContext"
import AccountSetting from "./pages/accountsetting.component";
import axios from "axios"


class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      auth: Cookies.get('userId') ? true : false,
      text: []
    };
  }

  componentDidMount(){
    if(Cookies.get('userId')){
      axios.get("/users/getProfile").then(res => {
        this.setState({userinfo: res.data})
      }).catch(error => {
        console.log(error)
      })
    }
  }

  render() {
    return (
      <>
          <AuthContext.Provider
            value={{
              userinfo: this.state.userinfo,
              setUserInfo: (userinfo) => {
                this.setState({userinfo})
              },
              auth: this.state.auth,
              setAuth: (auth) => {
                this.setState({ auth });
              },
            }}
          >
            <LessonsContext.Provider
              value={{
                text: this.state.text,
                setText: (text) => {
                  this.setState({ text });
                }
              }}
            >
              <Header></Header>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/lessons" component={LessonPage} />
                <ProtectedRoute path="/lessons/:id" component={LessonDetail} />
                <Route exact path="/login" component={LoginPage} />
                <ProtectedRoute exact path="/account" component={AccountSetting} />
                <Route exact path="/logout" component={LogoutPage} />
                <ProtectedSignUpRoute exact path="/register" component={Register} />
                <Route path="/admin" component={AdminPage} />
              </Switch>
            </LessonsContext.Provider>
          </AuthContext.Provider>
      </>
    );
  }
}

export default App;
