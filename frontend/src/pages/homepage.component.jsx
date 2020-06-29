import React, { Component } from "react";
import "./homepage.styles.css";
import DirectoryItem from "../components/directory-item/directory-item.component";
import MemberItem from "../components/member-item/member-item.component";
import DIRECTORY_DATA from "./directory.data";
import RANK_DATA from "./rank.data";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      directory: DIRECTORY_DATA,
      rank: RANK_DATA,
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
    const { directory, rank } = this.state;
    return (
      <>
        <div className="directory">
          <h3>Getting Started</h3>
          {directory.map((directory) => (
            <DirectoryItem key={directory.id} directory={directory} />
          ))}
        </div>
        <div className="rank">
          <h3>Rank</h3>
          {rank.map((rank) => (
            <MemberItem key={rank.id} rank={rank} />
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
