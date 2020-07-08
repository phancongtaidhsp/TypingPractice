import React, { Component } from "react";
import "./homepage.style.css"

class HomePage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="page">
          <div className="container">
            <div className="row head d-flex justify-content-end">
              <div className="col-3 col-xs-12 d-flex flex-column justify-content-center pt-4 membersHead">
              </div>
            </div>
            <div className="row body d-flex justify-content-center align-items-center">
              <div className="col-6">
                <h1 className="title">Typing Practice</h1>
                <p className="d-flex justify-content-center">
                  Môn Công Cụ Và Môi Trường Phát triển Phần Mềm
            <br />
            Thầy Nguyễn Thanh Tuấn Phụ Trách
          </p>
                <p className="d-flex justify-content-center">
                  Copyright By Marines Team
          </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <h1>User Stories</h1>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li>
                    <span className="number">1</span>
                    <span className="name">
                      User can see the time interval words must be typed in displayed
                      in the app window
              </span>
                    <span className="badge">
                      <i className="far fa-check-circle" aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <span className="number">2</span>
                    <span className="name">
                      User can see the number of successful attempts and the number of
                      total attempts in a score box
              </span>
                    <span className="badge">
                      <i className="fas fa-award" />
                    </span>
                  </li>
                  <li>
                    <span className="number">3</span>
                    <span className="name">
                      User can click a 'Start Practice' button to start the practice
                      session
              </span>
                    <span className="badge">
                      <i className="fas fa-child" />
                    </span>
                  </li>
                  <li>
                    <span className="number">4</span>
                    <span className="name">
                      User can see the prompt word displayed in a text box
              </span>
                    <span className="badge">
                      <i className="fas fa-bullhorn" />
                    </span>
                  </li>
                  <li>
                    <span className="number">5</span>
                    <span className="name">
                      User can begin typing the word in a text input box
              </span>
                    <span className="badge">
                      <i className="far fa-calendar-alt" />
                    </span>
                  </li>
                  <li>
                    <span className="number">6</span>
                    <span className="name">
                      User can see the letters that have been typed flash if an
                      incorrect letter is entered and the text input box will be
                      cleared
              </span>
                    <span className="badge">
                      <i className="fas fa-camera" />
                    </span>
                  </li>
                  <li>
                    <span className="number">7</span>
                    <span className="name">
                      User can see the a message adjacent to the text input box
                      indicating the user should try again if an incorrect letter is
                      entered
              </span>
                    <span className="badge">
                      <i className="far fa-comments" />
                    </span>
                  </li>
                  <li>
                    <span className="number">8</span>
                    <span className="name">
                      User can see the number of total attempts incremented in the
                      score box
              </span>
                    <span className="badge">
                      <i className="fas fa-futbol" />
                    </span>
                  </li>
                  <li>
                    <span className="number">9</span>
                    <span className="name">
                      User can see a congratulations message if the word is correctly
                      typed
              </span>
                    <span className="badge">
                      <i className="fab fa-angrycreative" />
                    </span>
                  </li>
                  <li>
                    <span className="number">10</span>
                    <span className="name">
                      User can see the time interval words must be typed decremented
                      by a small amount if the word is correctly typed
              </span>
                    <span className="badge">
                      <i className="far fa-grin-wink" />
                    </span>
                  </li>
                  <li>
                    <span className="number">11</span>
                    <span className="name">
                      User can see the number of successful attempts incremented in
                      the score box if the word was correctly typed
              </span>
                    <span className="badge">
                      <i className="far fa-id-badge" />
                    </span>
                  </li>
                  <li>
                    <span className="number">12</span>
                    <span className="name">
                      User can click a 'Stop Practice' button to stop the practice
                      session
              </span>
                    <span className="badge">
                      <i className="fab fa-battle-net" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="container">
            <h1>Bonus Features</h1>
            <div className="row features">
              <div className="col-4 col-xs-12">
                <div className="col-12 d-flex flex-column itemFeatures justify-content-center align-items-center">
                  <img src="/music.png" />
                  <p>
                    User can hear a unique audible tone signalling when a new word is
                    displayed, a word is correctly entered, or an incorrect letter is
                    typed in the word.
            </p>
                </div>
              </div>
              <div className="col-4 col-xs-12">
                <div className="col-12 d-flex flex-column itemFeatures justify-content-center align-items-center">
                  <img src="/coronavirus.png" />
                  <p>
                    User can see cumulative performance statistics across all of
                    his/her practice sessions.
            </p>
                </div>
              </div>
              <div className="col-4 col-xs-12">
                <div className="col-12 d-flex flex-column itemFeatures justify-content-center align-items-center">
                  <img src="/login.png" />
                  <p>User can login to the app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage