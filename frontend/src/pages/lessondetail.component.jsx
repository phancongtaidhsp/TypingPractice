import React, { Component } from "react";
import "./lessondetail.styles.css";
import axios from "axios";
import Word from "../components/Word/Word"
import Letter from "../components/Letter/Letter"
import MemberItem from "../components/member-item/member-item.component"
import { Link } from "react-router-dom";
import { BoxLoading } from 'react-loadingg'
import { LessonsContext } from "../LessonsContext"
import "../components/directory-item/directory-item.styles.css";
import rectange from ".././assets/img/rectange.png";

class LessonDetail extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      arrLetter: [],
      arrWord: [],
      ranks: [],
      currentLetter: 0,
      accuracy: 0,
      stop: false,
      score: 0,
      id: null,
      isLoading: true,
      nextLesson: null
    };
  }

  async myFunction() {
    let { id } = this.props.match.params;
    let lesson = this.context.text.find(lesson => lesson._id === id)
    if (lesson) {
      this.setState({ nextLesson: this.context.text[this.context.text.indexOf(lesson) + 1] })
    }
    await axios.get(`/lessons/${id}`)
      .then((res) => {
        let text = res.data.content;
        this.setState({ text: text, id: id });
        let arrLetter = text.split("").map(letter => { return { letter: letter, status: 2 } });
        arrLetter[0].status = 0;
        let arrWord = text.split(" ").map((word) => [...word.split(""), " "]);
        arrWord[arrWord.length - 1].pop();
        this.setState({ text: text, arrLetter: arrLetter, arrWord: arrWord })
        const body = document.getElementById("bodyApp");
        body.onkeydown = (event) => {
          if (event.key !== 'Shift') {
            if (!this.state.stop) {
              if (this.state.currentLetter + 1 === this.state.arrLetter.length) {
                this.setState({ stop: true })
                if (event.key === this.state.arrLetter[this.state.currentLetter].letter) {
                  var arrLetter = this.state.arrLetter;
                  arrLetter[this.state.currentLetter].status = 1
                  this.setState({
                    accuracy: this.state.accuracy + 1,
                    currentLetter: this.state.currentLetter + 1,
                    arrLetter: arrLetter
                  });
                }
                else {
                  var arrLetter = this.state.arrLetter;
                  arrLetter[this.state.currentLetter].status = 1
                  this.setState({
                    arrLetter: arrLetter
                  });
                }
                this.setState({ score: this.state.accuracy / this.state.arrLetter.length })
                const userId = localStorage.getItem('userId')
                axios.post('/scores/saveScore', { lesson_id: id, score: Math.round(this.state.score * 100) })
                  .then((re) => {
                    axios.get(`/scores/getRank/${id}`)
                      .then((res) => {
                        this.setState({ ranks: res.data })
                      })
                  })
                  .catch((error) => console.log(error));
              }
              else if (event.key === this.state.arrLetter[this.state.currentLetter].letter) {
                var arrLetter = this.state.arrLetter;
                arrLetter[this.state.currentLetter].status = 1
                arrLetter[this.state.currentLetter + 1].status = 0
                this.setState({
                  accuracy: this.state.accuracy + 1,
                  currentLetter: this.state.currentLetter + 1,
                  arrLetter: arrLetter
                });
              }
              else {
                var arrLetter = this.state.arrLetter;
                arrLetter[this.state.currentLetter].status = -1
                arrLetter[this.state.currentLetter + 1].status = 0
                this.setState({
                  currentLetter: this.state.currentLetter + 1,
                  arrLetter: arrLetter
                });
              }
            }
          }
        };
        this.setState({ isLoading: false })
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props && prevState.stop) {
      this.setState({
        text: [],
        arrLetter: [],
        arrWord: [],
        ranks: [],
        currentLetter: 0,
        accuracy: 0,
        stop: false,
        score: 0,
        id: null,
        isLoading: true,
        nextLesson: null
      })
      this.myFunction()
    }
  };

  componentDidMount() {
    this.myFunction();
  }

  render() {
    const { arrLetter, arrWord, isLoading, nextLesson } = this.state;
    let counter = -1;
    if (isLoading)
      return (
        <BoxLoading />
      )
    return (
      <>
        <div className="App">
          <div className="content-practice">
            {arrWord.map((word) => (
              <Word key={counter}>
                {word.map((letter) => {
                  counter++;
                  return (
                    <Letter
                      status={arrLetter[counter].status}
                      key={counter}
                    >
                      {letter}
                    </Letter>
                  );
                })}
              </Word>
            ))}
          </div>
          {this.state.stop ?
            <>
              <div className="rank">
                <h3 className="rank_title">Rank</h3>
                {this.state.ranks.map((rank, index) => (
                  <MemberItem key={index} rank={rank} index={index} />
                ))}

                {(this.state.stop && nextLesson) ?
                  <div className="directory-item">
                    <Link className="btn-start" to={`/lessons/${nextLesson._id}`}>
                      <img src={rectange} alt="icon"></img>
                  Next lesson
            </Link>
                  </div>
                  : ''}
                {(this.state.stop && !nextLesson) ? <Link to={`/lessons`}>
                  Back to lessons page
            </Link> : ''}
              </div>
            </>
            : ''}
        </div>
      </>
    );
  }
}

LessonDetail.contextType = LessonsContext;

export default LessonDetail;
