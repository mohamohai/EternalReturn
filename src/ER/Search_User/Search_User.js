import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./Search_User.css";

class Search_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: process.env.REACT_APP_ERKEY,
      arr: [],
    };
  }

  componentDidMount = () => {
    this.pass2();
  };

  passaa = () => {
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai";
    const res = axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "",
      },
    });
  };
  pass = () => {
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //여기가 그냥 닉으로 가져오는거?
    const url2 = "https://open-api.bser.io/v1/user/games/2604769"; //유저의 게임내용 단판? 가져옿기
    const url4 = "https://open-api.bser.io/v1/games/19102821"; //게임모두? 잠깐대기
    const url5 = "https://open-api.bser.io/v1/user/games/2604769";
    const url6 = "https://open-api.bser.ip/v1/data/Trait"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";
    const res = axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(res);
  };
  pass2 = async () => {
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //여기가 그냥 닉으로 가져오는거?
    const url2 = "https://open-api.bser.io/v1/user/games/2604769"; //유저의 게임내용 단판? 가져옿기
    const url4 = "https://open-api.bser.io/v1/games/19102821"; //게임모두? 잠깐대기
    const url5 = "https://open-api.bser.io/v1/user/games/2604769";
    const url6 = "https://open-api.bser.ip/v1/data/Trait"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";

    const {
      data: {
        user: { nickname },
      },
    } = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(nickname);

    const {
      data: { userGames },
    } = await axios.get(url5, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(userGames[1].gameId);
    const url8 = `https://open-api.bser.io/v1/games/${userGames[1].gameId}`;
    const res = await axios.get(url8, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(res);
  };
  getMovies2 = async () => {
    //나를 도와준 착한 블로그야
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
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
