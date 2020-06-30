import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.css";
import rectange from "../../assets/img/rectange.png";

const DirectoryItem = (props) => {
  return (
    <div className="directory-item">
      <p className="directory-number">{props.text.level}</p>
      <p className="directory-title">{props.text.name}</p>
      <Link className="btn-start" to={`/lessons/${props.text._id}`}>
        <img src={rectange} alt="icon"></img>
        Start
      </Link>
    </div>
  );
};

export default DirectoryItem;
