import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import axios from "axios";




const API_KEY = process.env.REACT_APP_ERKEY;
function SearchPlayer(){
       const [UserNick,setUserNick]=useState("흑인42호");
    const [UserNum,setUserNum]=useState(0);
    const [Next,setNext]=useState(0);

    const [getGameData, setGameData] = useState( [] );

    const matchingTeamMode=[0,"Solo","Duo","Squad"]
    const matchingMode=[0,1,"Normal","Ranked","No","Cobalt"]

    const WeaponType = ["None","글러브", "톤파", "방망이", "채찍",
                        "투척", "암기", "활", "석궁", "권총",
                        "돌격소총", "저격총","결번", "망치", "도끼", "단검",
                        "양손검", "폴암(미사용)", "쌍검", "창", "쌍절곤",
                        "레이피어", "기타", "카메라", "아르카나", "VF의수" ]





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
        getGame(userNum,Next);//겜데이터겟
      }
     /* ----------------------------------------------------------------------- */
    async function getGame(InsertNum,NextLevel) {
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
        setGameData(userGames)
        setNext(next);
        setUserNum(InsertNum)
        getGameDetails(userGames[0].gameId)
    }
    async function getGameDetails(gameId) {
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
    }



    useEffect(()=>{
        getStartData();
        }, []); //input에 값이 변경이 되었을때 effect를 실행한다
 
    
    return(
        <div className="SearchPlayer">
        <h1>{UserNick}</h1><br></br>
        <h1>{UserNum}</h1><br></br>
        <h1>{Next}</h1><br></br>
        <div className="SearchContainer">
            <div className="GameInfo">
                <div className="GameInfoResult"></div>
                <div className="GameInfoState">
                    <p>
                        <div>#1</div>
                        <div>Rank / solo </div> 
                        <div>3일전 </div>
                    </p>
                </div>
                <div className="GameInfoCharatcer">
                    <div className="GameInfoCharatcerLv">
                        <div className="GameInfoCharatcerLvCube">
                            <div>Lv : 11</div>
                            <div>Lv : 11</div>
                        </div>
                    </div>

                    <div className="GameInfoCharatcerThum">
                        <img src={`./image/Character_Img/Irem/Thumbnail/Default/Mini.png`}/>
                        <div className="GameInfoCharatcerCharacteristic">
                            <div>특</div>
                            <div>특</div>
                        </div>
                    </div>
                </div>
                <div className="GameInfoKdahd">
                    <div className="GameInfokdahdHead">
                        <div className="left gray">K</div><div className="left gray">D</div><div className="left gray">A</div><div className="left gray">피해량</div><br></br><br></br>
                        <div className="left">4</div><div className="left">3</div><div className="left">8</div><div className="left">45212</div>
                    </div>

                </div>

            </div>
        </div>

        {
            getGameData.map((DataRow,key)=>{
                return (
                    <div key = {key} className="GameInfo">
                    <div className="GameInfoResult"></div>
                    <div className="GameInfoState">
                        <p>
                            <div>#{DataRow.gameRank}</div>
                            <div>{matchingMode[DataRow.matchingMode]} / {matchingTeamMode[DataRow.matchingTeamMode]} </div> 
                            <div>{Math.floor(DataRow.playTime/60)} : {DataRow.playTime%60}</div>
                                
                        </p>
                    </div>
                    <div className="GameInfoCharatcer">
                        <div className="GameInfoCharatcerLv">
                            <div className="GameInfoCharatcerLvCube">
                                <div>Lv : {DataRow.characterLevel}</div>
                                <div>{WeaponType[DataRow.bestWeapon]}: {DataRow.bestWeaponLevel}</div>
                            </div>
                        </div>
    
                        <div className="GameInfoCharatcerThum">
                            <img src={`./image/Character_Img/${CharList[DataRow.characterNum-1].EngName}/Thumbnail/Default/Mini.png`}/>
                        </div>
                    </div>
                </div>
                
                )
            })
        }
        <div onClick={()=>getGame(UserNum,Next)}>가나다</div>

    </div>
    )
}export default SearchPlayer;