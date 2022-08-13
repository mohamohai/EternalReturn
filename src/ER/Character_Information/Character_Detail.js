import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import CharacterSkin from "./CharacterSkin.json";
import "./Character_Detail.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isAbsolute } from 'path';


function Character_Detail() {
  
  
    const { CharName } = useParams();
    const [SkinData, setSkin] = useState("Default");
    const [ShowSkill, setSkill] = useState("P");
    

    const goDetail= (inName) =>{
      window.location.href = `/Character_Infomation/Character_Detail/${inName}`;
  }
    let CharCount = 0;


    const  Character = [
      ["KorName","EngName","CharName"],
      ["재키", "Jackie",1],
      ["아야", "Aya",2],
      ["현우", "Hyunwoo",3],
      ["매그너스", "Magnus",4],
      ["피오라", "Fiora",5],
      ["나딘", "Nadine",6],
      ["자히르", "Zahir",7],
      ["하트", "Hart",8],
      ["아이솔", "Isol",9],
      ["리다이린", "LiDailin",10],
      ["유키", "Yuki",11],
      ["혜진", "Hyejin",12],
      ["쇼우", "Xiukai",13],
      ["시셀라", "Sissela",14],
      ["키아라", "Chiara",15],
      ["아드리아나", "Adriana",16],
      ["실비아", "Silvia",17],
      ["쇼이치", "Shoichi",18],
      ["엠마", "Emma",19],
      ["레녹스", "Lenox",20],
      ["로지", "Rozzi",21],
      ["루크", "Luke",22],
      ["캐시", "Cathy",23],
      ["아델라", "Adela",24],
      ["버니스", "Bernice",25],
      ["바바라", "Barbara",26],
      ["알렉스", "Alex",27],
      ["수아", "Sua",28],
      ["레온", "Leon",29],
      ["일레븐", "Eleven",30],
      ["리오", "Rio",31],
      ["윌리엄", "William",32],
      ["니키", "Nicky",33],
      ["나타폰", "Nathapon",34],
      ["얀", "Jan",35],
      ["이바", "Eva",36],
      ["다니엘", "Daniel",37],
      ["제니", "Jenny",38],
      ["카밀로", "Camilo",39],
      ["클로에", "Chloe",40],
      ["요한", "Johann",41],
      ["비앙카", "Bianca",42],
      ["셀린", "Celine",43],
      ["에키온", "Echion",44],
      ["마이", "Mai",45],
      ["에이든", "Aiden",46],
      ["라우라", "Laura",47],
      ["띠아", "Tia",48],
      ["펠릭스", "Felix",49],
      ["엘레나", "Elena",50],
      ["프리야", "Priya",51],
      ["아디나", "Adina",52],
      ["마커스", "Markus",53],
      ["칼라", "Karla",54],
      ["에스텔","Estelle",55],
      ["파울로","Paulo",56],
    ];

    const AllSkinKor = [
      ["Default","시간순"],
      ["Default","처형자",
      "스칼렛 코사지",
      "시스템쇼크"],
      ["Default","경찰",
      "불꽃놀이"],
      ["Default","뒷골목",
      "레드데블",
      "사관후보생",
      "사관후보생 이터니티"],
      ["Default","보스",
      "남국"],
      ["Default","장교",
      "총사"],
      ["Default","헌터",
      "빨간 망토",
      "야생의 부름"],
      ["Default","사신",
      "사이코시스"],
      ["Default","밴드 리더",
      "눈꽃축제"],
      ["Default","아포칼립스",
      "고스트헌터"],
      ["Default","여행자",
      "반항아",
      "용"],
      ["Default","사관후보생",
      "일도양단",
      "미드나잇 시노비"],
      ["Default","목련꽃",
      "사관후보생",
      "고스트헌터"],
      ["Default","일식요리사",
      "피구왕"],
      ["Default","겨울 클로버",
      "노블",
      "눈꽃축제"],
      ["Default","심판자",
      "고스트헌터"],
      ["Default","파이어뱃",
      "해충박멸"],
      ["Default","미드나잇 브리즈",
      "GoForce Now"],
      ["Default","히트맨",
      "눈꽃축제"],
      ["Default","메이드",
      "마녀"],
      ["Default","언더보스",
      "성야",
      "사이버애니악"],
      ["Default","블랙로즈",
      "네메시스"],
      ["Default","바텐더",
      "뒷골목",
      "사관후보생"],
      ["Default","군의관",
      "사이키메딕"],
      ["Default","화이트 퀸"],
      ["아포칼립스"],
      ["Default","정비공"],
      ["Default","오퍼레이터"],
      ["Default","사관후보생",
      "새해의 이야기꾼",
      "해변가"],
      ["Default","특수부대",
      "썸머파티"],
      ["Default","스위트"],
      ["Default","무녀",
      "정의의 마법소녀",
      "사랑의 마법소녀",
      "여름방학"],
      ["Default",    "고요한밤 밤의 신사"     ],
      ["Default","뒷골목",
      "비치발리볼"],
      ["Default", "극지탐험"],
      ["Default","무에타이"],
      ["Default", "별 관찰자",
      "사관후보생"],
      ["Default", "역병의사"],
      ["Default", "마피아"],
      ["Default","연미복"],
      ["Default","메이드"],
      ["Default","대행자"],
      ["Default","파자마"],
      ["Default", "폭탄해체반"],
      ["Default","뒷골목"],
      ["Default", "전학생"],
      ["Default","고스트헌터"],
      ["Default","프리즌 브레이크"],
      ["Default","거리의 화가"],
      ["Default", "놀이공원"],
      ["Default","블랙스완"],
      ["Default","영원의 꽃"],
      ["Default","운명의 아르카나"],
      ["Default","아포칼립스"],
      ["Default","해상구조요원"],
      ["Default","소방기동대"],
      ["Default","도전자"],
    ]
    const AllSkinEng = [
      ["Default", "시간순"],
      ["Default", "Executioner", "ScarletCorsage", "Overvolt"],
      ["Default", "OnDuty", "MidsummerFestival"],
      ["Default", "StreetFiend", "RedDevil", "Cadet", "Cadet(Immortal)"],
      ["Default", "Boss", "TropicalParty"],
      ["Default", "Lieutenant", "Musketeer"],
      ["Default", "NeonHuntress", "LittleNadineRidingHood", "HowlingSpirit"],
      ["Default", "GildedReaper", "CobaltEvolution"],
      ["Default", "Bandleader", "WinterCarnival"],
      ["Default", "Wasteland", "SpiritHunter"],
      ["Default", "JadeDrifter", "Rebel", "DragonDance"],
      ["Default", "Cadet", "Windblade", "MidnightShinobi"],
      ["Default", "MagnoliaOracle", "Cadet", "SpiritHunter"],
      ["Default", "Itamae", "DodgeballKing"],
      ["Default", "FrostClover", "Noblewoman", "WinterCarnival"],
      ["Default", "Arbiter", "SpiritHunter"],
      ["Default", "Firebat", "Exterminator"],
      ["Default", "MidnightBreeze", "GoForceNow"],
      ["Default", "Hitman", "WinterCarnival"],
      ["Default", "Maid", "Witchy"],
      ["Default", "Capo", "Mistletoe", "MidnightShinobi"],
      ["Default", "BlackRose", "EliteExecutioner"],
      ["Default", "Bartender", "StreetFiend", "Cathy"],
      ["Default", "CombatMedic","AndroidMedic"],
      ["Default", "WhiteQueen"],
      ["Wasteland"],
      ["Default", "ChiefMechanic"],
      ["Default", "Operator"],
      ["Default", "Cadet", "WistfulHeritage", "Summertime"],
      ["Default", "SpecOps", "Summertime"],
      ["Default", "SugarRush"],
      ["Default", "ShrineMaiden", "MagicalGirl", "LovelyMagicalGirl", "Summertime"],
      ["Default", "SnowGame"  ],
      ["Default", "Alleycat", "Beachside"],
      ["Default", "ArcticExpedition"],
      ["Default", "Champion"],
      ["Default", "CelestialClocktower", "Cadet"],
      ["Default", "PlagueDoctor"],
      ["Default", "Mobster"],
      ["Default", "BlueOrchid"],
      ["Default", "DutifulMaid"],
      ["Default", "HighPriest"],
      ["Default", "Comfy"],
      ["Default", "DefusalAgent"],
      ["Default", "CrimsonDevil"],
      ["Default", "TransferStudent"],
      ["Default", "Spirit Hunter"],
      ["Default", "JailhousePhantom"],
      ["Default", "StreetAtelier"],
      ["Default", "Lumialand"],
      ["Default", "BlackSwan"],
      ["Default", "EverlastingBlossom"],
      ["Default", "ArcanaofFate"],
      ["Default", "Wasteland"],
      ["Default", "Lifeguard"],
      ["Default", "SpecOps"],
      ["Default", "Challenger"],
    ] 
// 아드리아나 추가
//////여기서부터 팬킷에 없는거
//칼라, 재키, 마커스
    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 10,
      slidesToScroll: 6,
      className: "center",
    };
    
    for(let a =0;a<Character.length;a++){
      if(Character[a][1]==CharName){
        CharCount = a;
      }
    }
  return (
    
    <div id="DetailInfo">
       
    <button onClick={() => setSkin("Rio")}>asdasdasd</button>
        <img 
          id="ShowSkin"
          src={`/image/Character_Img/${CharName}/Thumbnail/${SkinData}/Full.png`}
        />
        
     
        

        {AllSkinEng[CharCount].map((ChooseSkin,key)=>{
          return(
            <div>
              <img
            id="imga"
            onClick={()=>setSkin(ChooseSkin)}
              src = {`/image/Character_Img/${CharName}/Thumbnail/${decodeURI(ChooseSkin)}/Mini.png`}
            ></img>
            </div>
          )
        })}

          <div id ="SkillSet">
          <ul id="SkillIcon">
              <li>
                <img
                  id="SkillPImg"
                  className="SkillBtn"
                  onClick={() => setSkill("P")}
                  src={`/image/Character_Img/${CharName}/SkillIcon/P.png`}
                />
              </li>
              <li>
                <img
                  id="SkillQImg"
                  className="SkillBtn"
                  onClick={() => setSkill("Q")}
                  src={`/image/Character_Img/${CharName}/SkillIcon/Q.png`}
                />
              </li>
              <li>
                <img
                  id="SkillWImg"
                  className="SkillBtn"
                  onClick={() => setSkill("W")}
                  src={`/image/Character_Img/${CharName}/SkillIcon/W.png`}
                />
              </li>
              <li>
                <img
                  id="SkillEImg"
                  className="SkillBtn"
                  onClick={() => setSkill("E")}
                  src={`/image/Character_Img/${CharName}/SkillIcon/E.png`}
                />
              </li>
              <li>
                <img
                  id="SkillRImg"
                  className="SkillBtn"
                  onClick={() => setSkill("R")}
                  src={`/image/Character_Img/${CharName}/SkillIcon/R.png`}
                />
              </li>
            </ul>
            <br></br>
            <img
              id="SkillGif"
              src={`/image/Character_Img/${CharName}/SkillIconGif/${ShowSkill}.gif`}
            />
             
          
          </div>














        <Slider {...settings}
        style={{position:"absolute",
        top:"550px"}}>
      {CharacterSkin.map((CharThumb,key) => {
        return(
          <div
                        id={"acacac"}
                        className="MiniDiv"
                      >
                        <div className='imgBack'></div>
            <img
            id="imga"
            onClick={()=>goDetail(CharThumb.EngName)}
              src = {`/image/Character_Img/${CharThumb.EngName}/Thumbnail/Default/Mini.png`}
            ></img>
            <div className='imgBack'></div>
          </div>
        )
      })}
      </Slider>
    </div>
  );

  }
export default Character_Detail;