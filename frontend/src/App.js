import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import LessonsPage from "./pages/lessonspage.component";
import LoginPage from "./pages/loginpage.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protected.route";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    // const { currentLetter } = this.state;
    // let counter = -1;
    // return (
    //   <div className="App">
    //     {this.arrWord.map((word) => (
    //       <Word key={counter}>
    //         {word.map((letter) => {
    //           counter++;
    //           return (
    //             <Letter
    //               currentLetter={currentLetter}
    //               index={counter}
    //               key={counter}
    //             >
    //               {letter}
    //             </Letter>
    //           );
    //         })}
    //       </Word>
    //     ))}
    //   </div>
    // );

    return (
      <>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/lessons/:id" component={LessonsPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </>
    );
  }
}

export default App;
