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
        </ul>
        <ul className="GNB_RightMenu">
          <li>
            <Link to="/Search_User">검색창asd</Link>
          </li>
          <li>
            <Link to="/Search_User/?NickName=흑인42호">모하이예아</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default GNB;
