import React, { Component } from "react";
import "./App.css";
import Word from "./components/Word/Word";
import Letter from "./components/Letter/Letter";
import HomePage from "./pages/homepage.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLetter: 0,
      text: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=10&start-with-lorem=1"
    )
      .then((response) => response.json())
      .then((result) => this.setState({ text: result }));

    // this.arrLetter = this.text.split("");
    // this.arrWord = this.text.split(" ").map((word) => [...word.split(""), " "]);
    // this.arrWord[this.arrWord.length - 1].pop();

    // const body = document.getElementById("bodyApp");
    // body.onkeydown = (event) => {
    //   if (event.key === this.arrLetter[this.state.currentLetter]) {
    //     this.setState({
    //       currentLetter: this.state.currentLetter + 1,
    //     });
    //   }
    // };
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
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
