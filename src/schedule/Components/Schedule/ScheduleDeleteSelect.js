import { Component } from "react";
import React, { useState } from "react";
import axios from "axios";

class ScheduleDeleteSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: sessionStorage.getItem("uid"),
      title: props.match.params.Title, //왜 반대?
      time: props.match.params.Date,
    };
  }

  _delete = async () => {
    const userId = this.state.account;
    const Title = this.state.title;
    const Date = this.state.time;

    console.log(userId, Title, Date, "가즈아");
    const body = { userId: userId, Title: Title, Date: Date };
    const res = await axios("/delete/ScheduleSelect", {
      method: "POST",
      data: { delete: body },
      headers: new Headers(),
    });
    return window.location.replace("http://localhost:3000/ScheduleMain"); //나중에 바꿔라 나야
  };
  render() {
    this._delete();

    return <div></div>;
  }
}
export default ScheduleDeleteSelect;
