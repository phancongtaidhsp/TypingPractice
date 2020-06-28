import React, { Component } from "react";
import "./homepage.styles.css";
import DIRECTORY_DATA from "./directory.data";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      directory: DIRECTORY_DATA,
    };
  }
  componentDidMount = async () => {
    await fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=6&start-with-lorem=1"
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ text: result });
      });

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
  };

  render() {
    const { directory } = this.state;
    return (
      <div className="directory">
        <h3>Getting Started</h3>
        {directory.map((directory) => (
          <div className="item" key={directory.id}>
            {directory.id}
            {directory.title}
            <a>Start</a>
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
