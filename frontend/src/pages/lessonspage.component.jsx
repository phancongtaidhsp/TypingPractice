import React, { Component } from "react";
import "./lessonspage.styles.css";
import API from "../api";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      id: null,
    };
  }
  componentDidMount = async () => {
    let { id } = this.props.match.params;
    await API.get(`lessons`)
      .then((res) => {
        const text = res.data;
        console.log(text);
        this.setState({ text: text, id: id });
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
    const { text, id } = this.state;
    return <h3>{text.map((text) => text.content + ",")}</h3>;
  }
}

export default HomePage;
