import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import LessonDetail from "./pages/lessondetail.component";
import LoginPage from "./pages/loginpage.component";
import LogoutPage from "./pages/logout.component";
import AdminPage from "./pages/adminpage.component"
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import Cookies from 'js-cookie';
import ProtectedSignUpRoute from "./protectedSignUp.route";
import Register from "./pages/register.component";
import {AuthContext} from "./AuthContext";


class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Cookies.get('userId') ? true : false
    };
  }

  render() {
    const self = this;

    return (
      <>
        <AuthContext.Provider
          value={{
            auth: this.state.auth,
            setAuth: (auth) => {
              self.setState({ auth });
            },
          }}
        >
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute path="/lessons/:id" component={LessonDetail}/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <ProtectedSignUpRoute exact path="/register" component={Register} />
            <Route path="/admin" component={AdminPage}></Route>
          </Switch>
        </AuthContext.Provider>
      </>
    );
  }
}

export default App;
