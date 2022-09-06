import { Component } from "react";
import React, { useState } from "react";
import axios from "axios";
import "./ScheduleAdd.css";

class testadd extends React.Component {
  constructor(props) {
    super(props);
    const ParamsDate = props.match.params.Date;
    const ParamsDate2 = props.match.params.Clock;
    let monCnt = ParamsDate.substring(4, 6);
    let dayCnt = ParamsDate.substring(6, 8);
    let ClockHour = ParamsDate2.substring(0, 2);
    let ClockMin = ParamsDate2.substring(2, 4);

    this.state = {
      account: "",
      title: "",
      content: "",
      location: "",
      time: "",
      etc: "",
      year: new Date().getFullYear() + "",
      month: monCnt,
      day: dayCnt,

      ParamsYear: ParamsDate.substring(0, 4),
      ParamsMonth: ParamsDate.substring(4, 6),
      ParamsDay: ParamsDate.substring(6, 8),
      hour: ParamsDate2.substring(0, 2),
      min: ParamsDate2.substring(2, 4),
    };
  }

  ScheduleAdd(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  _addData = async (e) => {
    const { account } = this.state;
    const { title } = this.state;
    const { content } = this.state;
    const { location } = this.state;
    const { etc } = this.state;
    const { year } = this.state;
    let { month } = this.state;
    let { day } = this.state;

    const { clock } = this.state;
    const { hour } = this.state;
    const { min } = this.state;
    // if (day < 10) {
    //   day = "0" + day;
    // }
    // if (month < 10) {
    //   month = "0" + month;
    // }
    const data = {
      account: sessionStorage.getItem("uid"),
      title: title,
      content: content,
      location: location,
      time: year + month + day,
      etc: etc,
      clock: hour + min,
    };
    e.preventDefault();

    const res = await axios("/add/Schedule", {
      method: "POST",
      data: data,
      headers: new Headers(),
    });

    alert("데이터를 추가했습니다.");
    return window.location.replace("http://localhost:3000/ScheduleMain"); //나중에 바꿔라 나야
  };

  render() {
    const dayCount = [];
    for (let cnt = 1; cnt <= 31; cnt++) dayCount.push(cnt);

    const monthCount = [];
    for (let cnt = 1; cnt <= 12; cnt++) monthCount.push(cnt);

    const yearCount = [];
    for (let cnt = 2022; cnt <= 2030; cnt++) yearCount.push(cnt);
    const Thour = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ];
    const Tmin = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55",
    ];
    return (
      <div>
        aaa
        <form method="POST" onSubmit={this._addData} className="ScheduleAddBox">
          <input
            className="ScheduleAddTitle"
            type="text"
            name="title"
            maxLength="20"
            placeholder="titlePlz"
            onChange={(e) => this.ScheduleAdd(e)}
          />

          <br></br>
          <input
            className="ScheduleAddContent"
            type="text"
            name="content"
            maxLength="20"
            placeholder="content"
            onChange={(e) => this.ScheduleAdd(e)}
          />

          <br></br>
          <input
            className="ScheduleAddLocation"
            type="text"
            name="location"
            maxLength="20"
            placeholder="location"
            onChange={(e) => this.ScheduleAdd(e)}
          />
          <br></br>
          <input
            className="ScheduleAddEtc"
            type="text"
            name="etc"
            maxLength="20"
            placeholder="etc"
            onChange={(e) => this.ScheduleAdd(e)}
          />
          <br></br>
          <select name="year" onChange={(e) => this.ScheduleAdd(e)}>
            {yearCount.map((cnt1, year) => {
              if (cnt1 == this.state.ParamsYear)
                return (
                  <option defaultValue value={cnt1} key={year}>
                    {cnt1}
                  </option>
                );
              return (
                <option key={year} value={cnt1}>
                  {cnt1}
                </option>
              );
            })}
          </select>
          <select name="month" onChange={(e) => this.ScheduleAdd(e)}>
            {monthCount.map((cnt2, month) => {
              if (cnt2 < 10)
                if (cnt2 == this.state.ParamsMonth)
                  return (
                    <option defaultValue value={cnt2} key={month} selected>
                      0{cnt2}
                    </option>
                  );
                else
                  return (
                    <option defaultValue value={cnt2} key={month}>
                      0{cnt2}
                    </option>
                  );
              if (cnt2 >= 10)
                if (cnt2 == this.state.ParamsMonth)
                  return (
                    <option defaultValue value={cnt2} key={month} selected>
                      {cnt2}
                    </option>
                  );
                else
                  return (
                    <option key={month} value={cnt2}>
                      {cnt2}
                    </option>
                  );
            })}
          </select>

          <select name="day" onChange={(e) => this.ScheduleAdd(e)}>
            {dayCount.map((cnt3, day) => {
              if (cnt3 < 10)
                if (cnt3 == this.state.ParamsDay)
                  return (
                    <option defaultValue value={cnt3} key={day} selected>
                      0{cnt3}
                    </option>
                  );
                else
                  return (
                    <option defaultValue value={cnt3} key={day}>
                      0{cnt3}
                    </option>
                  );
              if (cnt3 >= 10)
                if (cnt3 == this.state.ParamsDay)
                  return (
                    <option defaultValue value={cnt3} key={day} selected>
                      {cnt3}
                    </option>
                  );
                else
                  return (
                    <option key={day} value={cnt3}>
                      {cnt3}
                    </option>
                  );
            })}
          </select>
          <select name="hour" onChange={(e) => this.ScheduleAdd(e)}>
            {Thour.map((cnt4, thour) => {
              return <option>{cnt4}</option>;
            })}
          </select>
          <select name="min" onChange={(e) => this.ScheduleAdd(e)}>
            {Tmin.map((cnt5, tmin) => {
              return <option>{cnt5}</option>;
            })}
          </select>
          <input className="ScheduleAddBtn" type="submit" value="Add" />
        </form>
        {}
      </div>
    );
  }
}
export default testadd;
