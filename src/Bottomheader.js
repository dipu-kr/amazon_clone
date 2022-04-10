import React from "react";
import { Link } from "react-router-dom";
import "./css/bottom_header.css";

function Bottomheader() {
  return (
    <div className="w-full bottom-header grid">
      <ul className="ul-list">
        <li className="list nav-bar">
          <span>
            <i className="fa fa-bars"></i>
          </span>
          all
        </li>
        <li className="list">home & kitchen</li>
        <li className="list">new Realeash</li>
        <li className="list">computers</li>
        <li className="list">amazon pay</li>
        <li className="list">today's deal</li>
        <li className="list">prime</li>
        <li className="list">electronics</li>
        <li className="list">fashion</li>
        <li className="list">best sallers</li>
        <li className="list">mobiles</li>
      </ul>
    </div>
  );
}

export default Bottomheader;
