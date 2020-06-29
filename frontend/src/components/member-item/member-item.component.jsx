import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./member-item.styles.css";

const MemberItem = (props) => {
  return (
    <div className="member-item">
      <div>{props.rank.id}</div>
      <div>
        <img
          alt="monster"
          src={`https://robohash.org/${props.rank.id}?set=set2&size=50x50`}
        />
        <p>{props.rank.name}</p>
      </div>

      <p>{props.rank.point}</p>
    </div>
  );
};

export default MemberItem;
