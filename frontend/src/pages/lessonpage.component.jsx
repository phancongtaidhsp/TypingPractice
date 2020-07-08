import React, { Component } from "react";
import "./lessonpage.styles.css";
import DirectoryItem from "../components/directory-item/directory-item.component";
import MemberItem from "../components/member-item/member-item.component";
import { BoxLoading } from 'react-loadingg';
import axios from "axios";
import {LessonsContext} from "../LessonsContext"

class LessonPage extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      isLoading: true,
    };
  }
  componentDidMount = async () => {
    await axios.get(`/lessons`)
      .then((res) => {
        const text = res.data;
        this.context.setText(text)
        this.setState({ text: this.context.text });
        this.setState({
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { text, isLoading } = this.state;
    return isLoading ? (
      <BoxLoading />
    ) : (
      <>
        <div className="directory">
          <h3>Getting Started</h3>
          {text.map((text) => (
            <DirectoryItem key={text._id} text={text} />
          ))}
        </div>
      </>
    );
  }
}

LessonPage.contextType = LessonsContext;

export default LessonPage;
