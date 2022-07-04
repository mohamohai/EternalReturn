import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./Search_User.css";

class Search_User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.pass();
  };

  pass = () => {
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai";
    const res = axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "4Nq0afjnib7ZoDXNab9vI2q2ph8TTB5f95DOABGG",
      },
    });
    console.log(res);

    console.log("2604769, 내 계정 번호?");
  };
  pass = () => {
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai";
    const url2 = "https://open-api.bser.io/v1/user/games/2604769";
    const url3 = "https://open-api.bser.io/v1/user/렛츠고세구')";
    const url4 = "https://open-api.bser.io/v1/games/19102821";
    const url5 = "https://open-api.bser.io/v1/user/games/2604769";
    const res = axios.get(url5, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "ssaass",
      },
    });
    console.log(res.object);

    console.log("2604769, 내 계정 번호?");
  };
  render() {
    return (
      <div className="Search_User">
        <h1>얼라리</h1>
      </div>
    );
  }
}

export default Search_User;
