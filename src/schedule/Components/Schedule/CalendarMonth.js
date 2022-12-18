import React from "react";
import { Component } from "react";
import "./css/Calendar.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Modal from "react-awesome-modal";
import TrushIcon from "../image/trushIcon.png";
class CalendarMonth extends Component {
  state = {
    HaveVisible: false,
    DayId: " ",
    DayTitle: " ",
    DayContent: " ",
    DayLocation: " ",
    DayEtc: " ",
    DayDate: " ",
    DayClock: " ",
    divArr: [],
  };
  ClickDiv = (Stringi, Stringj) => {
    let title = document.getElementById(
      "Content" + Stringi + Stringj
    ).innerText;
    if (title == "") {
      title = " ";
    }
    let id = document.getElementById("IdNone" + Stringi + Stringj).innerText;
    let content = document.getElementById(
      "ConNone" + Stringi + Stringj
    ).innerText;
    if (content == "") {
      content = " ";
    }
    let etc = document.getElementById("EtcNone" + Stringi + Stringj).innerText;
    let date = document.getElementById(
      "TimeNone" + Stringi + Stringj
    ).innerText;
    if (etc == "") {
      etc = " ";
    }
    let location = document.getElementById(
      "LocNone" + Stringi + Stringj
    ).innerText;
    if (location == "") {
      location = " ";
    }
    let clock = document.getElementById(
      "ClockNone" + Stringi + Stringj
    ).innerText;

    this.setState({
      DayTitle: title,
      DayContent: content,
      DayLocation: location,
      DayEtc: etc,
      DayDate: date,
      DayClock: clock,
      DayId: id,
    });
    this.OpenModal();
  };

  OpenModal = (j) => {
    this.setState({
      HaveVisible: true,
    });
  };
  CloseModal = () => {
    this.setState({
      HaveVisible: false,
    });
  };
  ClickDivAdd = (input) => {
    let moveAdd = document.getElementById("TimeNone" + input).innerText;
    let moveAdd2 =
      String(new Date().getHours()) + String(new Date().getMinutes());
    window.location.href = `/ScheduleAddSelect/${moveAdd}/${moveAdd2}`;
  };
  PushDiv = (i) => {
    for (var j = 0; j <= 6; j++) {
      this.PushDivj(i, j);
    }
    this.state.divArr.push(<div key={String(i)} className="clear"></div>);
  };
  PushDivj = (i, j) => {
    if (j === 0) {
      this.state.divArr.push(
        // 데이터 주고 받기 / 달력 양식 년도해서 데이터 있으면 그 부분만 색칠/ modal 화면 구성 or viewer페이지 구성

        <div
          key={String(i) + String(j)}
          className={"CalForm Sun"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            value={String(i) + String(j)}
            className={"SunTitle  CalTitle Title" + String(i) + String(j)}
          ></div>

          <div
            id={"Content" + String(i) + String(j)}
            className={"SunContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "0");
            }}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    } else if (j === 1) {
      this.state.divArr.push(
        <div
          key={String(i) + String(j)}
          className={"CalForm Mon"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            className={"MonTitle CalTitle Title" + String(i) + String(j)}
          ></div>
          <div
            id={"Content" + String(i) + String(j)}
            className={"MonContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "1");
            }}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    } else if (j === 2) {
      this.state.divArr.push(
        <div
          key={String(i) + String(j)}
          className={"CalForm Tue"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            className={"TueTitle CalTitle Title" + String(i) + String(j)}
          ></div>
          <div
            id={"Content" + String(i) + String(j)}
            className={"TueContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "2");
            }}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    } else if (j === 3) {
      this.state.divArr.push(
        <div
          key={String(i) + String(j)}
          className={"CalForm Wed"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            className={"WedTitle CalTitle  Title" + String(i) + String(j)}
          ></div>
          <div
            id={"Content" + String(i) + String(j)}
            className={"WedContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "3");
            }}
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    } else if (j === 4) {
      this.state.divArr.push(
        <div
          key={String(i) + String(j)}
          className={"CalForm Thu"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            className={"ThuTitle CalTitle Title" + String(i) + String(j)}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"Content" + String(i) + String(j)}
            className={"ThuContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "4");
            }}
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    } else if (j === 5) {
      this.state.divArr.push(
        <div
          key={String(i) + String(j)}
          className={"CalForm Fri"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            className={"FriTitle CalTitle Title" + String(i) + String(j)}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"Content" + String(i) + String(j)}
            className={"FriContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "5");
            }}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    } else if (j === 6) {
      this.state.divArr.push(
        <div
          key={String(i) + String(j)}
          className={"CalForm Sat"}
          onClick={() => this.ClickDivAdd(String(i) + String(j))}
        >
          <div
            id={"Title" + String(i) + String(j)}
            className={"SatTitle CalTitle Title" + String(i) + String(j)}
          ></div>
          <div
            id={"Content" + String(i) + String(j)}
            className={"SatContent CalContent Content" + String(i) + String(j)}
            onClick={(e) => {
              e.stopPropagation();
              this.ClickDiv(String(i), "6");
            }}
          ></div>
          <div
            id={"IdNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"AccNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ConNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"LocNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"TimeNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"EtcNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
          <div
            id={"ClockNone" + String(i) + String(j)}
            className="DisplayNone"
          ></div>
        </div>
      );
    }
  };
  render() {
    for (var i = 0; i <= 5; i++) this.PushDiv(i);

    return (
      <div>
        {this.state.divArr}
        <div
          id="abc"
          value="ssss"
          class="ggggg"
          onClick={() => this.testClick("흠")}
        ></div>
        <Modal
          visible={this.state.HaveVisible}
          width="600"
          height="300"
          effect="fadeInDown"
          onClickAway={() => this.CloseModal()}
        >
          <div id="ModalView">
            <div>
              <a
                href={` /ScheduleDeleteSelect/${this.state.DayDate}/${this.state.DayTitle}`}
                style={{ float: "right", margin: "0 50px 0 0" }}
              >
                <img
                  style={{
                    width: "20px",
                    margin: "10px 0 0 0",
                  }}
                  src={TrushIcon}
                ></img>
              </a>

              <a
                href={`/ScheduleAddSelect/${this.state.DayDate}`}
                style={{
                  fontSize: "25px",
                  float: "right",
                  margin: "0 50px 0 0",
                }}
              >
                +
              </a>

              <a
                href={`/ScheduleUpdate/${this.state.DayId}/${this.state.DayTitle}/${this.state.DayContent}/${this.state.DayLocation}/${this.state.DayEtc}/${this.state.DayDate}/${this.state.DayClock}`}
              >
                테스트합시다
              </a>
            </div>
            <div className="clear"></div>
            <br></br>
            제목 : {this.state.DayTitle}
            <br></br>
            컨텐츠 : {this.state.DayContent}
            <br></br>
            장소 : {this.state.DayLocation}
            <br></br>
            이티씨 : {this.state.DayEtc}
            <br></br>
            날짜 : {this.state.DayDate}
            <br></br>
            시간 : {this.state.DayClock}
            <br></br>
            <br></br>
            <input
              value="닫기"
              type="button"
              onClick={() => this.CloseModal()}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default CalendarMonth;
