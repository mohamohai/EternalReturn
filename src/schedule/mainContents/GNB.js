import { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./css/GNB.css";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Cal from "../Components/SideMenu/Calendar";
import SideBarImage from "./sideBarImage.jpeg";

class GNB extends Component {
  state = {
    menuMessage: "menuOff",
    menuCheck: false,
  };

  onClickView = () =>
    this.setState({ menuMessage: "menuOff", menuCheck: false });
  onClickNot = () => this.setState({ menuMessage: "menuOn", menuCheck: true });
  onClickLogOut() {
    sessionStorage.removeItem("uid");
    window.location.reload();
  }
  gogotest() {
    sessionStorage.setItem("uid", "guest01");
  }
  render() {
    const { menuMessage, visible, menuCheck } = this.state;
    let uidSession = sessionStorage.getItem("uid");
    if (uidSession != null) {
      return (
        <div className="gnbContainer">
          <div className="ViewBtn">
            <div
              className={this.state.menuCheck ? "line1Click" : "line1"}
            ></div>
            <div
              className={this.state.menuCheck ? "line2Click" : "line2"}
            ></div>
            <div
              className={this.state.menuCheck ? "line3Click" : "line3"}
            ></div>
            <button
              className={this.state.menuCheck ? "offBtn" : "hideBtn"}
              onClick={this.onClickView}
            >
              {" "}
              off버튼
            </button>
            <button
              className={this.state.menuCheck ? "hideBtn" : "onBtn"}
              onClick={this.onClickNot}
            >
              {" "}
              on버튼{" "}
            </button>
          </div>

          <div className="logo">
            <Link to="/">Bob</Link>
          </div>
          <div className="gnbUser">
            <ul>
              <li>
                <Link to="/ScheduleAdd">데이터추가용 메뉴화면</Link>
              </li>
              <li>
                <button onClick={this.onClickLogOut}>로그아웃</button>
              </li>
              <li>my</li>
              <li>etc</li>
            </ul>
          </div>
          <div className={this.state.menuCheck ? "SideBarClick" : "SideBar"}>
            <ul>
              <img className="SideBarImage" src={SideBarImage}></img>
              <li className="left" onClick={this.onClickView}>
                <Link to="/ScheduleAdd">데이터 추가하기</Link>
              </li>
              <li className="SideBarGt">
                <Link to="/ScheduleAdd">&gt; </Link>
              </li>
              <li className="left" onClick={this.onClickView}>
                <Link to="/ScheduleMain"> 메인</Link>
              </li>
              <li className="SideBarGt">
                <Link to="/ScheduleMain">&gt; </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="gnbContainer">
          {uidSession == "guest01" ? "" : ""}
          <div className="ViewBtn">
            <div
              className={this.state.menuCheck ? "line1Click" : "line1"}
            ></div>
            <div
              className={this.state.menuCheck ? "line2Click" : "line2"}
            ></div>
            <div
              className={this.state.menuCheck ? "line3Click" : "line3"}
            ></div>
            <button
              className={this.state.menuCheck ? "offBtn" : "hideBtn"}
              onClick={this.onClickView}
            >
              {" "}
              off버튼
            </button>
            <button
              className={this.state.menuCheck ? "hideBtn" : "onBtn"}
              onClick={this.onClickNot}
            >
              {" "}
              on버튼{" "}
            </button>
          </div>

          <div className="logo">
            <Link to="/">Bob</Link>
          </div>
          <div className="gnbUser">
            <ul>
              <li>
                <Link to="/SignIn">데이터추가용 메뉴화면</Link>
              </li>
              <li>
                <Link to="/SignIn">로그인</Link>
              </li>
              <li>my</li>
              <li>etc</li>
              <li>
                <button onClick={this.gogotest}>guest01</button>
              </li>
            </ul>
          </div>
          <div className={this.state.menuCheck ? "SideBarClick" : "SideBar"}>
            <ul>
              <img className="SideBarImage" src={SideBarImage}></img>
              <li className="left" onClick={this.onClickView}>
                <Link to="/SignIn">데이터 추가하기</Link>
              </li>
              <li className="SideBarGt">
                <Link to="/SignIn">&gt; </Link>
              </li>
              <li className="left" onClick={this.onClickView}>
                <Link to="/SignIn"> 메인</Link>
              </li>
              <li className="SideBarGt">
                <Link to="/SignIn">&gt; </Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}
export default GNB;
