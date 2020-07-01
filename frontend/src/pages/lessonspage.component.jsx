import React, { Component } from "react";
import "./lessonspage.styles.css";
import API from "../api";
import Word from "../components/Word/Word"
import Letter from "../components/Letter/Letter"

class LessonsPage extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      arrLetter: [],
      arrWord: [],
      currentLetter: 0,
      accuracy: 0,
      score: 0,
      id: null,
    };
  }
  componentDidMount = async () => {
    let { id } = this.props.match.params;
    await API.get(`lessons/${id}`)
      .then((res) => {
        let text = res.data.content;
        console.log(res.data)
        this.setState({ text: text, id: id });
        let arrLetter = text.split("");
        let arrWord = text.split(" ").map((word) => [...word.split(""), " "]);
        arrWord[arrWord.length - 1].pop();
        this.setState({text: text, arrLetter: arrLetter, arrWord: arrWord})
        const body = document.getElementById("bodyApp");
        body.onkeydown = (event) => {
          if(this.state.currentLetter >= this.state.arrLetter.length){
            this.setState({score: this.state.accuracy/this.state.arrLetter.length})
            API.post('scores/saveScore', {lesson_id: id, score: this.state.score})
            .then((res) => {
              console.log(res.data)
            })
            .catch((error) => console.log(error));
          }
          else if (event.key === this.state.arrLetter[this.state.currentLetter]) {
            this.setState({
              accuracy: this.state.accuracy + 1,
              currentLetter: this.state.currentLetter + 1,
            });
          }
          else{
            this.setState({
              currentLetter: this.state.currentLetter + 1,
            });
          }
        };
      })
      .catch((error) => console.log(error));
  };

  render() {

    const { currentLetter, arrWord } = this.state;
    let counter = -1;
    return (
      <div className="App">
        {arrWord.map((word) => (
          <Word key={counter}>
            {word.map((letter) => {
              counter++;
              return (
                <Letter
                  currentLetter={currentLetter}
                  index={counter}
                  key={counter}
                >
                  {letter}
                </Letter>
              );
            })}
          </Word>
        ))}
      </div>
    );
  }
}

export default LessonsPage;
