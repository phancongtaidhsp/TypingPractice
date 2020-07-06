import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import LessonsPage from "./pages/lessonspage.component";
import LoginPage from "./pages/loginpage.component";
import LogoutPage from "./pages/logout.component";
import AdminPage from "./pages/adminpage.component"
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protected.route";
import { ProtectedSignUpRoute } from "./protectedSignUp.route";
import Register from "./pages/register.component";

export const AuthContext = React.createContext({
  auth: false,
  setAuth: function (auth) {
    // this.auth = auth;
  },
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: localStorage.getItem("auth") === "true",
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
              // const isAuth = localStorage.getItem("auth");
              // console.log(isAuth);

              self.setState({ auth });
            },
          }}
        >
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute path="/lessons/:id" component={LessonsPage} />
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
