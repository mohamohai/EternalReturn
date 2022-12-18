import React, { Component, useEffect, useState } from "react";
import "./Character_Introduce.css";
import CharAll from "../JsonFile/Char.json";
import Skin from "../JsonFile/Skin.json";
import ERGNB from "../ERGNB";
import Aos from "aos";
import { useParams } from "react-router-dom";
  

function Character_Introduce(props) {
    const {key1}=useParams();
    const [CharNameEng, setCharNameEng]=useState(key1)

    const [CharNameNum, setCharNameNum]=useState(0)
    const [CharSkinData, setCharSkinData]=useState("Default")
    const SkillArr = ["P","Q","W","E","R"];
    const [SkillCnt, setSkillCnt]=useState(0);
    const SkillUp = document.getElementsByClassName("SkillIcon");

    let CharCount=0;
    useEffect(()=>{
      for(let i = 0 ; i<CharAll.length;i++){
        if(CharNameEng == CharAll[i].EngName){
          setCharNameNum(i);
          console.log(i)
        } 
      }
      SkillUp[0].classList.add("SkillIconUp");
    },[])

    for(let a =0;a<CharAll.length;a++){
      if(CharNameEng==CharAll[a].EngName){
        CharCount = a;
      }
    }
    const SkillCntChange=(insetNum)=>{
      for(let i=0;i<SkillUp.length;i++){
        SkillUp[i].classList.remove("SkillIconUp");
      }
      setSkillCnt(insetNum);
      SkillUp[insetNum].classList.add("SkillIconUp");
      

     
    }

    return (
      <div className="Character_Introduce">
        <ERGNB></ERGNB>
        {CharAll[0].EngName}
        <div className="CharacterPreview">
        {CharCount!=0? <div className="GoGo" onClick={()=>window.location.href=`/Character/${CharAll[CharCount-1].EngName}`}>&lt;</div> : <div className="GoGo"></div>}
            <div className="CharacterEx">
              <div className="CharacterExN">{CharAll[CharCount].KorName}</div>
              <div className="CharacterLine"></div>
              <div className="CharacterExEx">{CharAll[CharCount].Explanation}</div>
            </div>
    
            <div className="PreviewImg">
              <img src={`/image/Character_Img/${CharAll[CharCount].EngName}/Thumbnail/${CharSkinData}/Full.png`}></img>
            </div>
            <div className="PreviewBtn">
              {Skin[CharCount].map((PreviewB,index)=>{
                return(
                  <div>
                    <img className="ThumbChar" onClick={()=>setCharSkinData(PreviewB)}src={`/image/Character_Img/${CharAll[CharCount].EngName}/Thumbnail/${PreviewB}/Mini.png`}></img>
                  </div>
                )
              })}
            </div>
            {CharCount!=CharAll.length-1? <div className="GoGo" onClick={()=>window.location.href=`/Character/${CharAll[CharCount+1].EngName}`}>&gt;</div> : <div className="GoGo"></div>}
            
        </div>
        <div className="Character_Introduce2">
          <div className="Character_SkillInfo">
            <div className="px500">
              {SkillArr.map((SkillIconMap,index)=>{
                console.log(index+1)
                return(
                <img key={index} onClick={()=>SkillCntChange(index)} className="SkillIcon" src={`/image/Character_Img/${CharAll[CharCount].EngName}/SkillIcon/${SkillIconMap}.png`}></img>
                )
              })}
              <div className="SKillLine2"></div>
              <div className="SkillName">{CharAll[CharCount].Skill[SkillCnt]}</div>
              <div className="SkillEx">{CharAll[CharCount].SkillEx[SkillCnt]}</div>
            </div>
            
          </div>
          <div className="Charatcer_Skill">
            {<img  className="SkillIcon" src={`/image/Character_Img/${CharAll[CharCount].EngName}/SkillIconGif/${SkillArr[SkillCnt]}.gif`}></img>}
          </div>
        </div>

      </div>
        
 
    );
  }

export default Character_Introduce;
