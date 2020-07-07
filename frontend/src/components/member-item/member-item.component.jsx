import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./member-item.styles.css";

const MemberItem = (props) => {
  return (
    <div className="member-item d-flex">
      <div className="member-id d-flex align-items-center">{props.index + 1}</div>
      <div className="content-member d-flex justify-content-between">
        <div className="d-flex align-items-center left-member">
          <img
            alt="monster"
            src={`https://robohash.org/${props.rank.id}?set=set2&size=50x50`}
          />
          <p>{props.rank.username}</p>
          <p className="right-member">
            {props.rank.score}
            <span>t/p</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
