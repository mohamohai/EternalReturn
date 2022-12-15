import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"
import axios from "axios";



const API_KEY = process.env.REACT_APP_ERKEY;
function SearchPlayer(){
   
 
    const [UserNick,setUserNick]=useState("흑인42호");
    const [UserNum,setUserNum]=useState(0);
    const [Next,setNext]=useState(0);

    const [getGameData, setGameData] = useState({ hits: [] });






    const StartUrl = `https://open-api.bser.io/v1/user/nickname?query=${UserNick}`
    const NumUrl = `https://open-api.bser.io/v1/games/${UserNum}`//추출한 것을 숫자파트에 삽입
   
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
        setUserNum(userNum);
        console.log("여기는 됩니다" + userNum )
        getGame(userNum,Next);
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
        setNext(next);
        setUserNum(InsertNum)


     

        console.log(userGames);
    }
   



    useEffect(()=>{
        getStartData();
        }, []); //input에 값이 변경이 되었을때 effect를 실행한다
 
    
    return(<div className="SearchPlayer">
        <h1>{UserNick}</h1><br></br>
        <h1>{UserNum}</h1><br></br>
        <h1>{Next}</h1><br></br>


                {
                    getGameData.hits.map((DataRow,key)=>{
                        return (<div key={key}>{DataRow.nickname}</div>)
                    })
                }
                <div onClick={()=>getGame(UserNum,Next)}>가나다</div>

            </div>)
}export default SearchPlayer;