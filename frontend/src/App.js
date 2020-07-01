import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import LessonsPage from "./pages/lessonspage.component";
import LoginPage from "./pages/loginpage.component";
import LogoutPage from "./pages/logout.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protected.route";
import Register from "./pages/register.component";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/lessons/:id" component={LessonsPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </>
    );
  }
}

export default App;
