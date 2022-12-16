import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayerGame.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import ItemList from "./JsonFile/Item.json" 
import axios from "axios";
import { useParams } from "react-router-dom";
import Hyun from "../Hyun/Hyun";


const API_KEY = process.env.REACT_APP_ERKEY;




function SearchPlayerGame(props){
  const gameId = props.value[1];

  const [UserNick,setUserNick]=useState( props.value[0] );
  const [UserNum,setUserNum]=useState(0);
  const [Next,setNext]=useState(0);
  const [DamageTop,setDamageTop]=useState(100);

  const [getGameData, setGameData] = useState([]);
  const [Step,setStep] = useState(false);

  const matchingTeamMode=[0,"Solo","Duo","Squad"]
  const matchingMode=[0,1,"Normal","Ranked","No","Cobalt"]

  const WeaponType = ["None","글러브", "톤파", "방망이", "채찍",
                      "투척", "암기", "활", "석궁", "권총",
                      "돌격소총", "저격총","결번", "망치", "도끼", "단검",
                      "양손검", "폴암(미사용)", "쌍검", "창", "쌍절곤",
                      "레이피어", "기타", "카메라", "아르카나", "VF의수" ]

  const DamageTopCompare = (insertDamage) => { // 플레이 유저 최대 딜량
    console.log(insertDamage)
    if(DamageTop < insertDamage){
      setDamageTop(insertDamage);
    }
  }

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

const ItemSearch=(Weapon, Chest, Hat, Arm, Leg, Accessory )=>{//아이템찾기 자세히보기용 버전
  !Weapon   ? Weapon="empty" :Weapon=Weapon;
  !Chest    ? Chest="empty"  :Chest=Chest  ;
  !Hat      ? Hat="empty"    :Hat=Hat      ; 
  !Arm      ? Arm="empty"    :Arm=Arm      ;
  !Leg      ? Leg="empty"    :Leg=Leg      ;
  !Accessory? Accessory="empty":Accessory=Accessory;
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
      <div className="GameInfoItemMatchDetails">
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

  return(
      <div className='SearchPlayerGame'>
          <div className="SearchContainer">
          {getGameData.map((DataRow,index)=>{
            DamageTopCompare(DataRow.damageToPlayer)
              return(
                <div className={`GameInfoDetails ${UserNick == DataRow.nickname?"MyRecord" :"NotMyRecord"}`}>
                  <div className={`GameInfoDetailsResult ${DataRow.gameRank<=1 ? "colorFirst": DataRow.gameRank<=3 ?"colorSecond" : "colorFail" }`}>#{DataRow.gameRank}</div>
                  
                  <div className="GameInfoDetailsCharatcerLv">
                      <div className="GameInfoDetailsCharatcerLvCube">
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

                  <div className="GameInfoDetailsCharatcerThum">
                    <img src={`/image/Character_Img/${CharList[DataRow.characterNum-1].EngName}/Thumbnail/Default/Mini.png`}/>
                  </div>
                  <div className="GameInfoDetailsCharacterTrait">
                    <img src={`/image/Trait/all/${DataRow.traitFirstCore}.png`}></img>
                    <img src={`/image/Trait/all/${  Math.floor(DataRow.traitSecondSub[0]/100000)==70? "Havoc":
                    Math.floor(DataRow.traitSecondSub[0]/100000)==71? "Fortification": "Support"}.png`}></img>
                  </div>
                  <div className="GameInfoDetailsName"  onClick={()=>window.location.href=`/Eternal/${DataRow.nickname}`}>{DataRow.nickname}
                  </div>
                  <div className="GameInfoDetailskdahd">
                    <div className="left">{DataRow.playerKill}</div><div className="left">{DataRow.playerDeaths}</div><div className="left">{DataRow.playerAssistant}</div>   
                  </div>
                  <div className="GameInfoDetailsDamageaa">
                    <progress className="GameInfoDetailsDamageProgress" value={`${DataRow.damageToPlayer}`} min="0" max={`${DamageTop}`}></progress>
                    <div className="GameInfoDetailsDamageNum">{DataRow.damageToPlayer}</div>
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
            })}
              

          </div>
      </div>
    )
}
export default SearchPlayerGame;