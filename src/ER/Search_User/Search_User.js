import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./Search_User.css";

class Search_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: process.env.REACT_APP_ERKEY,
      arr: [],
      characterNum: "", //사용 캐릭터
      gameRank: "", // 현게임 등수
      playerKill: "", // 현게임 킬수
      playerAssistant: "", // 현게임 어시
      playerDeaths: "", // 현게임 데스
      damageToPlayer: "", // 현게임 총딜량
      bestWeapon: "", // 무숙
      skillLevelInfo: "", // 스킬별 레벨
      skillOrderInfo: "", // 스킬 찍은 순서
      routeIdOfStart: "", // 루트 번호
      matchingMode: "", //플레이한 게임 모드 2,3,6  노말 랭크 코발
      equipment: "", // 사용 아이템 6배열 좌상우하순서
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
    const urlq = "https://lostark.game.onstove.com/Profile/Character/abcdefg";
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //여기가 그냥 닉으로 가져오는거?
    const url2 = "https://open-api.bser.io/v1/user/games/2604769"; //유저의 게임내용 단판? 가져옿기
    const url4 = "https://open-api.bser.io/v1/games/19102821"; //게임모두? 잠깐대기
    const url5 = "https://open-api.bser.io/v1/data/Skill";
    const url6 = "https://open-api.bser.io/v1/data/Trait/Name/"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";
    const res = axios.get(url6, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(res);
  };
  pass2 = async () => {
    const url0 = "https://open-api.bser.io/v1/user/nickname?query=사텐";
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //닉넴으로 서치
    const urlUserNum = "https://open-api.bser.io/v1/user/games/2604769";
    const url4 = "https://open-api.bser.io/v1/games/19102821"; //게임모두? 잠깐대기
    const url6 = "https://open-api.bser.io/v1/weaponRoutes/recommend/532117"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";

    const abc = axios.get(url6, {
      //기본형
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(abc);
    /////여기서부터  쿼리문에 닉네임을 통해 userNum을 뜯어서 param을 써서 한 번 더 돌려 유저데이터 출력 예정
    const {
      data: {
        user: { userNum },
      },
    } = await axios.get(url, {
      // 여기에 e.target text로 데이터 받아서 유저네임 검색
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(userNum);
    const urlUserNumt = `https://open-api.bser.io/v1/user/games/${userNum}`;
    const {
      data: { userGames },
    } = await axios.get(urlUserNumt, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log("캐릭 : " + userGames[0].characterNum); //여기 첫배열 뒤에부분에 원하는거 적으면 나옴
    console.log("순위 : " + userGames[0].gameRank);
    console.log("킬수 : " + userGames[0].playerKill);
    console.log("어시 : " + userGames[0].playerAssistant);
    console.log("데스 : " + userGames[0].playerDeaths);
    console.log("딜량 : " + userGames[0].damageToPlayer);
    console.log("무숙 : " + userGames[0].bestWeapon);
    console.log(userGames[0].skillLevelInfo);
    console.log(userGames[0].skillOrderInfo);
    console.log("장비순서 : " + userGames[0].equipment[0]);
    console.log("장비순서 : " + userGames[0].equipment[1]);
    console.log("장비순서 : " + userGames[0].equipment[2]);
    console.log("장비순서 : " + userGames[0].equipment[3]);
    console.log("장비순서 : " + userGames[0].equipment[4]);
    console.log("장비순서 : " + userGames[0].equipment[5]);

    //   const url8 = `https://open-api.bser.io/v1/games/${userGames[1].gameId}`;
    //   const res = await axios.get(url8, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-api-key": this.state.API_KEY,
    //     },
    //   });
    //   console.log(res);
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
        <div id="menu">
          <div>
            {" "}
            <span>1</span>
            <p className="arrow_box">1a</p>
          </div>
          <div>
            {" "}
            <span>2</span>
            <p className="arrow_box">2b</p>
          </div>
          <div>
            {" "}
            <span>3</span>
            <p className="arrow_box">3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search_User;
