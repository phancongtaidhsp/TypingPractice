import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.css";
import rectange from "../../assets/img/rectange.png";

const DirectoryItem = (props) => {
  return (
    <div className="directory-item">
      <p className="number">{props.directory.id}</p>
      <p className="title">{props.directory.title}</p>
      <Link className="btn-start" to="/">
        <img src={rectange} alt="icon"></img>
        Start
      </Link>
    </div>
  );
};

export default DirectoryItem;
