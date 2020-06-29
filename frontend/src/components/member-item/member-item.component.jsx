import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./member-item.styles.css";

const MemberItem = (props) => {
  return (
    <div className="member-item d-flex">
      <div className="member-id d-flex align-items-center">{props.rank.id}</div>
      <div className="content-member d-flex justify-content-between">
        <div className="d-flex align-items-center left-member">
          <img
            alt="monster"
            src={`https://robohash.org/${props.rank.id}?set=set2&size=50x50`}
          />
          <p>{props.rank.name}</p>
        </div>

        <p className="right-member">
          {props.rank.point}
          <span>t/p</span>
        </p>
      </div>
    </div>
  );
};

export default MemberItem;
