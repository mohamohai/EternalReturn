import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"
import axios from "axios";



const API_KEY = process.env.REACT_APP_ERKEY;
function SearchPlayer(){
   
    const [UserInfo,setUserInfo]=useState({ //유저가 쓰는 닉네임, 게임 데이터를 얻기 위한 UserNum, 더 많은 데이터를 뽑을 때 써야 하는 Next
        UserNick:"흑인42호",
        UserNum:0,
        Next:0,
        More:0,
    })
    const [getGameData, setGameData] = useState({ hits: [] });






    const StartUrl = `https://open-api.bser.io/v1/user/nickname?query=${UserInfo.UserNick}`
    const NumUrl = `https://open-api.bser.io/v1/games/${UserInfo.UserNum}`//추출한 것을 숫자파트에 삽입
   
    async function getStartData() {
        let SearchUserNumUrl = StartUrl;

        const {
          data: {
            user: { userNum },
          },
        } = await axios.get(SearchUserNumUrl, {
          // 여기에 e.target text로 데이터 받아서 유저네임 검색
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        });
        setUserInfo({UserNum : userNum}) 
        console.log("여기는 됩니다" + userNum )
        getGame(userNum,UserInfo.Next);
      }
     
    async function getGame(InsertNum,NextLevel) {
        console.log(InsertNum,NextLevel)
        let url="";
        if (NextLevel != 0) {
            url =  `https://open-api.bser.io/v1/user/games/${InsertNum}?next=${NextLevel}`
          } else {
            url =  `https://open-api.bser.io/v1/user/games/${InsertNum}`
          } 
       
        const {
            data: { userGames },
            data: { next },
        } = await axios.get(url, {
            headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
            },
        });
        setGameData({hits:userGames})
        setUserInfo({Next:next,UserNum:InsertNum})


     

        console.log(userGames);
    }
   



    useEffect(()=>{
        getStartData();
        }, []); //input에 값이 변경이 되었을때 effect를 실행한다
 
    
    return(<div className="SearchPlayer">
        <h1>{UserInfo.UserNick}</h1><br></br>
        <h1>{UserInfo.UserNum}</h1><br></br>
        <h1>{UserInfo.Next}</h1><br></br>
        <h1>{UserInfo.More}</h1><br></br>


                {
                    getGameData.hits.map((DataRow,key)=>{
                        return (<div key={key}>{DataRow.nickname}</div>)
                    })
                }
                <div onClick={()=>getGame(UserInfo.UserNum,UserInfo.Next)}>가나다</div>

            </div>)
}export default SearchPlayer;