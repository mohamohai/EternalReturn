import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import ItemList from "./JsonFile/Item.json" 
import axios from "axios";
import My from "../my/my";
import FourZeroFour from "../FourZeroFour/FourZeroFour";
import SearchPlayerGame from './SearchPlayerGame.js';


const API_KEY = process.env.REACT_APP_ERKEY;

function SearchPlayer(prop){
    const [UserNick,setUserNick]=useState( prop.value );
    const [UserNum,setUserNum]=useState(0);
    const [Next,setNext]=useState(0);

    const [getGameData, setGameData] = useState([]);
    const [Step,setStep] = useState(false);

    const matchingTeamMode=[0," / Solo"," / Duo"," / Squad",""]
    const matchingMode=[0,1,"Normal","Ranked","Cobalt","Cobalt","Cobalt"]

    const WeaponType = ["None","글러브", "톤파", "방망이", "채찍",
                        "투척", "암기", "활", "석궁", "권총",
                        "돌격소총", "저격총","결번", "망치", "도끼", "단검",
                        "양손검", "폴암(미사용)", "쌍검", "창", "쌍절곤",
                        "레이피어", "기타", "카메라", "아르카나", "VF의수" ]


    const ItemSearch=(Weapon, Chest, Hat, Arm, Leg, Accessory )=>{
        !Weapon   ? Weapon="empty" :Weapon=Weapon;
        !Chest    ? Chest="empty": Chest=Chest   ;
        !Hat      ? Hat="empty":  Hat=Hat        ; 
        !Arm      ? Arm="empty":Arm=Arm          ;
        !Leg      ? Leg="empty":Leg=Leg          ;
        !Accessory? Accessory="empty":Accessory=Accessory ;
        let equipmentArr =[
            [],[],[],[],[],[]
        ]  
      
        for(let i = 0; i<ItemList.length;i++){
            if(ItemList[i].ItemCode==Weapon){
                equipmentArr[0][0]=ItemList[i].ItemCode;
                equipmentArr[0][1]=ItemList[i].ItemName;
                equipmentArr[0][2]=ItemList[i].ItemTier;
            }
            if(ItemList[i].ItemCode==Chest){
                equipmentArr[1][0]=ItemList[i].ItemCode;
                equipmentArr[1][1]=ItemList[i].ItemName;
                equipmentArr[1][2]=ItemList[i].ItemTier;
            }
            if(ItemList[i].ItemCode==Hat){
                equipmentArr[2][0]=ItemList[i].ItemCode;
                equipmentArr[2][1]=ItemList[i].ItemName;
                equipmentArr[2][2]=ItemList[i].ItemTier;
            }
            if(ItemList[i].ItemCode==Arm){
                equipmentArr[3][0]=ItemList[i].ItemCode;
                equipmentArr[3][1]=ItemList[i].ItemName;
                equipmentArr[3][2]=ItemList[i].ItemTier;
            }
            if(ItemList[i].ItemCode==Leg){
                equipmentArr[4][0]=ItemList[i].ItemCode;
                equipmentArr[4][1]=ItemList[i].ItemName;
                equipmentArr[4][2]=ItemList[i].ItemTier;
            }
            if(ItemList[i].ItemCode==Accessory){
                equipmentArr[5][0]=ItemList[i].ItemCode;
                equipmentArr[5][1]=ItemList[i].ItemName;
                equipmentArr[5][2]=ItemList[i].ItemTier;
            }
        }
        
        return(
            <div className="GameInfoItemMatch">
                <div>
                    <img className={`ItemTier${equipmentArr[0][2]}`} src={`/image/Item/Weapon/${Weapon}.png`} />
                    <img className={`ItemTier${equipmentArr[1][2]}`} src={`/image/Item/Chest/${Chest}.png`} />
                    <img className={`ItemTier${equipmentArr[2][2]}`} src={`/image/Item/Hat/${Hat}.png`} />
                </div>
                <div>
                    <img className={`ItemTier${equipmentArr[3][2]}`} src={`/image/Item/Arm/${Arm}.png`} />
                    <img className={`ItemTier${equipmentArr[4][2]}`} src={`/image/Item/Leg/${Leg}.png`} />
                    <img className={`ItemTier${equipmentArr[5][2]}`} src={`/image/Item/Accessory/${Accessory}.png`} />
                </div>
            </div>
        )
    }

    const StartUrl = `https://open-api.bser.io/v1/user/nickname?query=${UserNick}`
    const NumUrl = `https://open-api.bser.io/v1/games/${UserNum}`//추출한 것을 숫자파트에 삽입
    async function NickNameCheck(){
        let SearchUserNumUrl = StartUrl;
        const {
            data: {
              code,
            },
          } = await axios.get(SearchUserNumUrl, {
            // 여기에 e.target text로 데이터 받아서 유저네임 검색
            headers: {
              "Content-Type": "application/json",
              "x-api-key": API_KEY,
            },
          });  
        if(code != 200){
            alert("닉네임을 다시 확인해주세요 :)")
            window.history.back()
        }
    }
    async function getStartData() {
        FreeCharacters();
        NickNameCheck();
        let SearchUserNumUrl = StartUrl;

        
          const {
            data: {
              code,
              user: { userNum },
              user: { nickname },
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
        if(userGames){
            setStep(true);
        }else{
            setStep(false)
        }

        setGameData(userGames)
        setNext(next);
        setUserNum(InsertNum)
        // getGameDetails(userGames[0].gameId)
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
        
        return userGames
            
    }

    async function FreeCharacters() {
        let SearchUserNumUrl = 'https://open-api.bser.io/v1/freeCharacters/2';
        const {
       
            data: { freeCharacters },
          
        } = await axios.get(SearchUserNumUrl, {
          // 여기에 e.target text로 데이터 받아서 유저네임 검색
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
        Step ?
        <div className="SearchPlayer">
            <div className="Last10Game">
            <div className="Last10GameEle">
                <p>최근 10게임 간단 정리</p>
                <div className="Last10GameChar">
                    <div className="Last10GameCharCon">
                    {getGameData.map((DataRow10,index)=>{
                        return(
                                <div key={index} className="Last10GameCharConThum">
                                    <div style={{backgroundColor:`${DataRow10.gameRank<=1 ? "rgb(231, 203, 38, 0.7)" : DataRow10.gameRank<=3 ? "rgb(70, 128, 255,0.7)":"rgb(190, 190, 190,0.7)"}`}}>{DataRow10.gameRank}</div>
                                    <img src={`/image/Character_Img/${CharList[DataRow10.characterNum-1].EngName}/Thumbnail/Default/Mini.png`}/>
                                </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            </div>
             <div className="SearchContainer">
                        <div className="MoreGame" onClick={()=>getGame(UserNum,Next)}>더 보기</div>
            {
            getGameData.map((DataRow,index)=>{
                return (
                    <div key = {index}>
                    <div  className="GameInfo">
                        <div className={`GameInfoResult ${DataRow.gameRank<=1? "colorFirstb": DataRow.gameRank<=3? "colorSecondb":"colorThirdb"}`}></div>
                        <div className="GameInfoState">
                            <div className="GameInfoStatePP">
                                <div className={`${DataRow.gameRank<=1? "colorFirst": DataRow.gameRank<=3? "colorSecond":"colorThird"}`}>#{DataRow.gameRank}</div>
                                <div>{matchingMode[DataRow.matchingMode]}{matchingTeamMode[DataRow.matchingTeamMode] } </div> 
                                <div>{Math.floor(DataRow.playTime/60)>=10 ? Math.floor(DataRow.playTime/60) : "0" + Math.floor(DataRow.playTime/60)} : {(DataRow.playTime%60)>=10 ? DataRow.playTime%60 : "0" + DataRow.playTime%60}</div>
                                
                            </div>
                        </div>

                        <div className="GameInfoCharatcer">
                            <div className="GameInfoCharatcerLv">
                                <div className="GameInfoCharatcerLvCube">
                                    <div>
                                        <div>Lv </div>
                                        <div>{DataRow.characterLevel}</div>
                                    </div>
                                    <div>
                                        <div><img className="WeaponType" src={`/image/Item/Weapon/${DataRow.bestWeapon}.png`}/></div>
                                        <div className="WeaponLv">{DataRow.bestWeaponLevel}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="GameInfoCharatcerThum">
                                <img onClick={()=>window.location.href=`/Character/${CharList[DataRow.characterNum-1].EngName}`}  src={`/image/Character_Img/${CharList[DataRow.characterNum-1].EngName}/Thumbnail/Default/Mini.png`}/>
                            </div>
                            <div className="GameInfoCharacterTrait">
                                <img src={`/image/Trait/all/${DataRow.traitFirstCore}.png`}></img>
                                <img src={`/image/Trait/all/${  Math.floor(DataRow.traitSecondSub[0]/100000)==70? "Havoc":
                                Math.floor(DataRow.traitSecondSub[0]/100000)==71? "Fortification": "Support"}.png`}></img>
                            </div>
                        </div>

                        <div className="GameInfoKdahd">
                            <div className="GameInfokdahdHead">
                                <div className="left gray">K</div><div className="left gray">D</div><div className="left gray">A</div><div className="left gray">피해량</div><div className="left gray">MMR</div><br></br><br></br>
                                <div className="left">{DataRow.playerKill}</div><div className="left">{DataRow.playerDeaths}</div><div className="left">{DataRow.playerAssistant}</div><div className="left">{DataRow.damageToPlayer}</div><div className="left">{DataRow.mmrAfter>0?DataRow.mmrAfter:"-"}</div><span className="mmrGain">{DataRow.mmrAfter>DataRow.mmrBefore? "+" + DataRow.mmrGain: DataRow.mmrGain}</span>    
                            </div>
                        </div>
                        <div className="GameInfoPlusLine" onClick={()=>window.location.href=`/Eternal/${UserNick}/${DataRow.gameId}`}>
                           <span> &gt; </span>
                        </div>

                        <div className="GameInfoItem">
                            <div>
                            {ItemSearch(DataRow.equipment[0],DataRow.equipment[1],DataRow.equipment[2],
                                        DataRow.equipment[3],DataRow.equipment[4],DataRow.equipment[5])
                            }
                            </div>
                        </div>
                    </div> 
                    </div>
                    
                
                )
            })
        }
        </div>
        </div>
    :<div><My></My></div>)
}export default SearchPlayer;