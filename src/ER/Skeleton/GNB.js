import React, { Component } from "react";
import axios from "axios";
import "./css/GNB.css";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";
class GNB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextBoxNickName: "",
    };
  }

  NickNameAdd(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(this.state.TextBoxNickName);
    this.setState(nextState);
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
          <li>
            <Link to="/Search_User/?NickName=누나홀닭">아리가또</Link>
          </li>
          <input
            className=""
            type="text"
            name="TextBoxNickName"
            maxLength="30"
            placeholder="닉네임"
            onChange={(e) => this.NickNameAdd(e)}
          />
          <a href={`Search_User/?NickName=${this.state.TextBoxNickName}`}>
            aasdasd
          </a>
        </ul>
      </div>
    );
  }
}

export default GNB;
