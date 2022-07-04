import React, { Component } from "react";
import axios from "axios";
import "./css/GNB.css";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";
class GNB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="GNB">
        <li>
          <Link to="/">
            <img src={require("./image/ER Logo White.png")}></img>
          </Link>
        </li>

        <ul className="GNB_LeftMenu">
          <li>
            <Link to="/Character_Infomation">실험체</Link>
          </li>
          <li>
            <Link to="/Record">전적</Link>
          </li>
          <li>추가분 예정</li>
        </ul>
        <ul className="GNB_RightMenu">
          <Link to="/Search_User">
            <li>검색창</li>
          </Link>
          <li>추가분</li>
        </ul>
      </div>
    );
  }
}

export default GNB;
