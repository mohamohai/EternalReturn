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
    console.log(e);
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(this.state.TextBoxNickName);
    this.setState(nextState);
  }

  conlog() {
    console.log("된다링된다");
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
          <form action="/Search_User/">
            <input
              className="SearchBox"
              type="text"
              name="NickName"
              maxLength="30"
              placeholder="닉네임"
              onChange={(e) => this.NickNameAdd(e)}
              onClick={this.conlog}
              href={`Search_User/?NickName=${this.state.TextBoxNickName}`}
            />
            <a href={`Search_User/?NickName=${this.state.TextBoxNickName}`}>
              aasdasd
            </a>
          </form>
        </ul>
      </div>
    );
  }
}

export default GNB;
