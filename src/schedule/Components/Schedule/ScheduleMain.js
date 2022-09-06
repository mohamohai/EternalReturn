import React, { useState } from "react";
import { Component } from "react";
import axios from "axios";
import "./css/ScheduleMain.css";
import "./css/Calendar.css";
import "./css/Calendar2.css";
import $ from "jquery";

import Calendar from "./CalendarMonth.js";

import Modal from "react-awesome-modal";

class ScheduleMain extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuMessage: "menuOff",
    menuCheck: false,
    list: [],
    ScheduleList: [],
    FullYear: new Date().getFullYear(),
    Mon: new Date().getMonth() + 1,
    uid: sessionStorage.getItem("uid"),
    daySearch: ["일", "월", "화", "수", "목", "금", "토"],
    divArr: [],
  };

  _openModal = function () {
    this.setState({
      visible: true,
    });
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
  };

  getHtml = async () => {
    try {
      return console.log(await axios.get("http://ncov.mohw.go.kr/"));
      // 해당 사이트 html 태그 가져오기
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.getHtml();
    this._getData();
  }

  _getData = async () => {
    const userId = this.state.uid;
    const res = await axios.get("/get/ScheduleId", {
      params: { userId: userId },
    });

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);
      return this.onWrite();
    }

    this.setState({ list: res.data });
    this.setState({ SelectList: this.state.list });
    this.onWrite();
  };

  MinusMonth = () => {
    if (this.state.Mon === 1) {
      this.MinusWrite();
      this.setState({ Mon: 12 });
      this.setState({ FullYear: this.state.FullYear - 1 });
    } else {
      this.MinusWrite();
      this.setState({ Mon: this.state.Mon - 1 });
    }
  };
  MinusWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon - 2).getDay();

    let DayPoint = 0; // 요일 체크
    let DayWrite = 1; // 일 타이핑
    let DayElement; // 기입용

    let lowMon = this.state.Mon - 1; //함수에서 쓸 현재 달
    let lowDay = 1; // 0붙이기용 일
    let CompareDay;
    let ContentElement; // Content 기입용

    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }
    let FullDay = this.state.FullYear + lowMon + lowDay;

    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        ContentElement.innerText = "";
        ContentElement.style.display = "none";
        if (DayPoint >= DayCnt) {
          //1일 타이틀 찍고 아래는 보이면 안되니까  클래스명으로 none설정
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;

          CompareDay = DayWrite;
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          DayElement = document.getElementById(
            "TimeNone" + String(i) + "" + String(j)
          );
          DayElement.innerText = CompareDay;
          this.state.list.map((line, dd) => {
            // 데이터 기입 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + String(i) + "" + String(j)
              );
              DayElement.style.display = "block";
              if (DayElement.innerText.length == 0) {
                DayElement.innerText = line.title;
                DayElement.style.backgroundColor = "rgb(242, 168, 255)";
                DayElement.style.borderRadius = "5px";
                //
                DayElement = document.getElementById(
                  "ConNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.content;
                DayElement = document.getElementById(
                  "LocNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.location;

                DayElement = document.getElementById(
                  "EtcNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.etc;
              }
            }
          });
          if (
            DayWrite >
            new Date(this.state.FullYear, this.state.Mon, 0).getDate()
          ) {
            const element = document.getElementById(
              "Title" + String(i) + String(j)
            );
            element.innerText = "";
          }
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }
  };
  PlusMonth = () => {
    let emm = document.getElementById("PTitle1");

    if (this.state.Mon === 12) {
      this.setState({ Mon: 1 });
      this.setState({ FullYear: this.state.FullYear + 1 });
      this.PlusWrite();
    } else {
      this.setState({ Mon: this.state.Mon + 1 });
      this.PlusWrite();
    }
  };
  PlusWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon).getDay();

    let DayPoint = 0; // 요일 체크
    let DayWrite = 1; // 일 타이핑
    let DayElement; // 기입용

    let lowMon = this.state.Mon + 1; //함수에서 쓸 현재 달
    let lowDay = 1; // 0붙이기용 일
    let CompareDay; // map 함수 if용
    let ContentElement; // Content 기입용

    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }
    let FullDay = this.state.FullYear + lowMon + lowDay;

    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        ContentElement.innerText = "";
        ContentElement.style.display = "none";
        if (DayPoint >= DayCnt) {
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;

          CompareDay = DayWrite;
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          DayElement = document.getElementById(
            "TimeNone" + String(i) + "" + String(j)
          );
          DayElement.innerText = CompareDay;
          this.state.list.map((line, dd) => {
            // 데이터 기입 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

            if (line.time === CompareDay) {
              DayElement = document.getElementById(
                "Content" + String(i) + "" + String(j)
              );
              DayElement.style.display = "block";
              if (DayElement.innerText.length == 0) {
                DayElement.innerText = line.title;
                DayElement.style.backgroundColor = "rgb(242, 168, 255)";
                DayElement.style.borderRadius = "5px";
                //
                DayElement = document.getElementById(
                  "ConNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.content;
                DayElement = document.getElementById(
                  "LocNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.location;

                DayElement = document.getElementById(
                  "EtcNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.etc;
              }
            }
          });
          if (
            DayWrite >
            new Date(this.state.FullYear, this.state.Mon, 0).getDate()
          ) {
            const element = document.getElementById(
              "Title" + String(i) + String(j)
            );
            element.innerText = "";
          }
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }
  };
  onWrite = () => {
    let DayCnt = new Date(this.state.FullYear, this.state.Mon - 1).getDay();

    let DayPoint = 0; // 요일 체크
    let DayWrite = 1; // 일 타이핑
    let DayElement; // 기입용
    let PlusCount = 1; // 잠시대기
    let PlusDate = "";
    let PlusDateM = "";

    let lowMon = this.state.Mon; //함수에서 쓸 현재 달
    let lowDay = 1; // 0붙이기용 일
    let CompareDay;
    let ContentElement; // Content 기입용
    if (lowMon < 10) {
      lowMon = "0" + lowMon;
    } else {
      lowMon = lowMon + "";
    }
    if (lowDay < 10) {
      lowDay = "0" + lowDay;
    }
    let FullDay = this.state.FullYear + lowMon + lowDay;

    for (var i = 0; i <= 5; i++) {
      for (var j = 0; j <= 6; j++) {
        const element = document.getElementById(
          "Title" + String(i) + String(j)
        );
        element.innerText = "";
        ContentElement = document.getElementById(
          "Content" + String(i) + String(j)
        );
        ContentElement.innerText = "";
        ContentElement.style.display = "none";
        if (DayPoint >= DayCnt) {
          const element = document.getElementById(
            "Title" + String(i) + String(j)
          );
          element.innerText = DayWrite;

          CompareDay = DayWrite;
          if (CompareDay < 10) {
            CompareDay = this.state.FullYear + "" + lowMon + "0" + CompareDay;
          } else {
            CompareDay = this.state.FullYear + "" + lowMon + "" + CompareDay;
          }
          DayElement = document.getElementById(
            //날짜는 없는 날도 써야하니까 여기 기입 아래는 데이터 받는거니까 제외
            "TimeNone" + String(i) + "" + String(j)
          );
          DayElement.innerText = CompareDay;
          this.state.list.map((line, dd) => {
            //   console.log(this.state.list);
            // 데이터 기입 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

            if (line.time === CompareDay) {
              if (PlusDate != CompareDay) {
                PlusCount = 1;
              }

              DayElement = document.getElementById(
                "Content" + String(i) + "" + String(j)
              );
              DayElement.style.display = "block";

              if (DayElement.innerText.length == 0) {
                DayElement.innerText = line.title;
                DayElement.style.backgroundColor = "rgb(242, 168, 255)";
                DayElement.style.borderRadius = "5px";
                ////
                DayElement = document.getElementById(
                  "IdNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.id;
                DayElement = document.getElementById(
                  "ConNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.content;
                DayElement = document.getElementById(
                  "LocNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.location;

                DayElement = document.getElementById(
                  "EtcNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.etc;
                DayElement = document.getElementById(
                  "ClockNone" + String(i) + "" + String(j)
                );
                DayElement.innerText = line.clock;
              } else if (DayElement.innerText.length != 0 && PlusCount == 1) {
                $(".Content" + String(i) + "" + String(j)).before(
                  "<div id = PTitle1>" + line.title + "</div>"
                );

                PlusCount++;
                PlusDate = CompareDay;
              } else {
                $(".Content" + String(i) + "" + String(j)).before(
                  "<div id = PTitle" + PlusCount + ">" + line.title + "</div>"
                );

                PlusCount++;
                PlusDate = CompareDay;
              }
            }
          });
          if (
            DayWrite >
            new Date(this.state.FullYear, this.state.Mon, 0).getDate()
          ) {
            const element = document.getElementById(
              "Title" + String(i) + String(j)
            );
            element.innerText = "";
          }
          DayWrite++;
          DayPoint++;
        } else {
          DayPoint++;
        }
      }
    }
  };

  render() {
    const { list } = this.state;
    const SelectList = [];
    const SelectData = [];

    list.map((rowCnt, keyCnt) => {
      SelectData.push(rowCnt);
      SelectList.push(rowCnt);
    });

    return (
      <div className="Select">
        <div className="c1image">
          <img
            className="phoneImage"
            alt="iPhone_01"
            src={require("./Fountain Pen.png")}
          />
          <img src={require("./Fountain Pen.png")} />
        </div>
        <div className="selectMon">
          <ul>
            <li className="YearMonth">
              {this.state.FullYear} &nbsp; {this.state.Mon}
            </li>
            <li className="leftAngleBracket" onClick={this.MinusMonth}>
              &lt;&nbsp;
            </li>
            <li className="rightAngleBracket" onClick={this.PlusMonth}>
              &gt;
            </li>
          </ul>
        </div>

        <div className="MainCalMonth">
          <Calendar></Calendar>
        </div>
      </div>
    );
  }
}
export default ScheduleMain;
