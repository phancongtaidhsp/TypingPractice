import React, { Component } from "react";
import "./homepage.styles.css";
import DirectoryItem from "../components/directory-item/directory-item.component";
import MemberItem from "../components/member-item/member-item.component";
import RANK_DATA from "./rank.data";
import API from "../api";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      rank: RANK_DATA,
      isLoading: true,
    };
  }
  componentDidMount = async () => {
    await API.get(`lessons`)
      .then((res) => {
        const text = res.data;
        this.setState({ text: text });
      })
      .catch((error) => console.log(error));

    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { rank, text, isLoading } = this.state;
    return isLoading ? (
      ""
    ) : (
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
