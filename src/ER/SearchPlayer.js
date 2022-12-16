import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import ItemList from "./JsonFile/Item.json" 
import axios from "axios";
import { useParams } from "react-router-dom";
import Hyun from "../Hyun/Hyun";
import SearchPlayerGame from './SearchPlayerGame.js';

const API_KEY = process.env.REACT_APP_ERKEY;

function SearchPlayer(){
    const { key1 } = useParams(); // 

    const [UserNick,setUserNick]=useState( key1 );
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



    let UserOne =[
        1, "Tia","펭귄머신",12,13,2,0,2, 1000, "ㅁ","ㅁ","ㅁ","ㅁ","ㅁ","ㅁ",
    ]






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
        console.log("ASd")
        return <div>
            제발 되라구...
        </div>
            
    }



    useEffect(()=>{
        getStartData();
        }, []); //input에 값이 변경이 되었을때 effect를 실행한다
 
    
    return(
        
        <div className="SearchPlayer">
        <div>
        </div>
            {Step ? <div className="SearchContainer">
            {
            getGameData.map((DataRow,key)=>{
                return (
                    <div key = {key} className="GameInfo">
                        <div className="GameInfoResult"></div>
                        <div className="GameInfoState">
                            <div className="GameInfoStatePP">
                                <div>#{DataRow.gameRank}</div>
                                <div>{matchingMode[DataRow.matchingMode]} / {matchingTeamMode[DataRow.matchingTeamMode]} </div> 
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
                                <img src={`/image/Character_Img/${CharList[DataRow.characterNum-1].EngName}/Thumbnail/Default/Mini.png`}/>
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
                        <div className="GameInfoPlusLine">
                            <input type="button" value="add" onClick={()=>getGameDetails(DataRow.gameId)}></input>
                        </div>
                        <div className="GameInfoItem">
                            <div>
                            {ItemSearch(DataRow.equipment[0],DataRow.equipment[1],DataRow.equipment[2],
                                        DataRow.equipment[3],DataRow.equipment[4],DataRow.equipment[5])
                            }
                            </div>
                        </div>
                    </div>
                    
                
                )
            })
        }
            </div>:<div><Hyun></Hyun></div>}
            
            
            {/* <div className="GameInfo">
                <div className="GameInfoResult"></div>
                <div className="GameInfoState">
                    <div>
                        <div>#1</div>
                        <div>Rank / solo </div> 
                        <div>3일전 </div>
                    </div>
                </div>
                <div className="GameInfoCharatcer">
                    <div className="GameInfoCharatcerLv">
                        <div className="GameInfoCharatcerLvCube">
                            <div>Lv : 11</div>
                            <div><img className="WeaponType" src="/image/Item/Weapon/2.png"/> ?: 11</div>
                        </div>
                    </div>

                    <div className="GameInfoCharatcerThum">
                        <img src={`/image/Character_Img/Irem/Thumbnail/Default/Mini.png`}/>
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

            </div> */}
            <div>asd</div>
        </div>
    )
}export default SearchPlayer;