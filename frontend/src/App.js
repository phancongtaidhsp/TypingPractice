import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import LessonsPage from "./pages/lessonspage.component";
import Header from "./components/header/header.component";
import { Router, Route, Switch } from "react-router-dom";

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
          <Route path="/lessons/:id" component={LessonsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
