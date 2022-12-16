import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayerGame.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import ItemList from "./JsonFile/Item.json" 
import axios from "axios";
import { useParams } from "react-router-dom";
import Hyun from "../Hyun/Hyun";


const API_KEY = process.env.REACT_APP_ERKEY;




function SearchPlayerGame(props){
  const gameId = props.value

  const [UserNick,setUserNick]=useState( props.value );
  const [UserNum,setUserNum]=useState(0);
  const [Next,setNext]=useState(0);

  const [getGameData, setGameData] = useState([]);
  const [Step,setStep] = useState(false);

  const matchingTeamMode=[0,"Solo","Duo","Squad"]
  const matchingMode=[0,1,"Normal","Ranked","No","Cobalt"]

  const WeaponType = ["None","글러브", "톤파", "방망이", "채찍",
                      "투척", "암기", "활", "석궁", "권총",
                      "돌격소총", "저격총","결번", "망치", "도끼", "단검",
                      "양손검", "폴암(미사용)", "쌍검", "창", "쌍절곤",
                      "레이피어", "기타", "카메라", "아르카나", "VF의수" ]

  useEffect(()=>{
    getGameDetails()
  },[])

  async function getGameDetails() {
    let url = `https://open-api.bser.io/v1/games/${gameId}`;
    const {
        data: { userGames },
        data: { next },
    } = await axios.get(url, {
        headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        },
    });
    if(userGames){
      setStep(true);
  }else{
      setStep(false)
  } 
  let RankResult;
  RankResult = userGames.sort(function (a,b){
    return a.gameRank - b.gameRank
  })


  setGameData(userGames)
}

  return(
      <div className='SearchPlayerGame'>
          <div className="SearchContainer">
          {getGameData.map((DataRow,index)=>{
              return(
                <div className="GameInfoDetails">
                  <div className="GameInfoDetailsResult">{DataRow.gameRank} {DataRow.nickname}</div>
                </div>
              )
            })}
              

          </div>
      </div>
    )
}
export default SearchPlayerGame;