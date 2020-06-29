import React, { Component } from "react";
import "./homepage.styles.css";
import DirectoryItem from "../components/directory-item/directory-item.component";
import MemberItem from "../components/member-item/member-item.component";
import DIRECTORY_DATA from "./directory.data";
import RANK_DATA from "./rank.data";
import API from "../api";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      directory: DIRECTORY_DATA,
      rank: RANK_DATA,
    };
  }
  componentDidMount = async () => {
    API.get(`lessons`)
      .then((res) => {
        const text = res.data;
        console.log(text);
        this.setState({ text: text });
      })
      .catch((error) => console.log(error));

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
    const { directory, rank, text } = this.state;
    return (
      <>
        <div className="directory">
          <h3>Getting Started</h3>
          {text.map((text) => (
            <DirectoryItem key={text._id} text={text} />
          ))}
        </div>
        <div className="rank">
          <h3 className="rank_title">Rank</h3>
          {rank.map((rank) => (
            <MemberItem key={rank.id} rank={rank} />
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
