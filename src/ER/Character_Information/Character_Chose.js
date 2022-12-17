import React, { Component, useState } from "react";
import "./Character_Chose.css";
import CharAll from "../JsonFile/Char.json";
import ERGNB from "../ERGNB";
import Aos from "aos";
  function Character_Chose() {

  const SelectliOnC = document.getElementsByClassName("SelectliOn");
  const SelectliOn = (cnt) =>{
    for(let i = 0; i<=SelectliOnC.length-1;i++){
      SelectliOnC[i].classList.remove("SelectliOnC")
    }
    SelectliOnC[cnt].classList.add("SelectliOnC")
    
  }
    const [ViewMode, setViewMode] = useState(0);
    let KorName = CharAll;
    const reverse = [...CharAll].reverse();//최신순
    

    KorName = [...CharAll].sort(function(a,b){
      let x = a.KorName
      let y = b.KorName
      if (x < y){
        return -1
      }
      if(x > y){
        return 1;
      }
      return 0;
    })

   
    return (
      <div className="Character_Chose">
        <ERGNB></ERGNB>
        <div className="CharacterCol">

          <div className="CharacterColLeft"><input type="text" placeholder="검색" onChange={(e)=>setViewMode(e.target.value)}></input></div>
          <div className="CharacterColRight">
            <ul>
              <li className="SelectliOn" onClick={()=>{setViewMode("");SelectliOn(0)}}>All</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("초보 추천");SelectliOn(1)}}>초보 추천</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("탱커");SelectliOn(2)}}>탱커</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("원거리 딜러");SelectliOn(3)}}>원거리 딜러</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("암살자");SelectliOn(4)}}>암살자</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("인파이터");SelectliOn(5)}}>인파이터</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("스킬 딜러");SelectliOn(6)}}>스킬 딜러</li>
              <li className="SelectliOn" onClick={()=>{setViewMode("이동 제어");SelectliOn(7)}}>이동 제어</li>
            </ul>
          </div>
        </div>
          <div className="Character_Contanier">
            <div>
              {KorName.filter((val)=>{
                if(ViewMode==""){
                  return val;
                }else if(val.KorName.includes(ViewMode)){
                  return val;
                }else if(val.Role.includes(ViewMode)){
                  return val;
                }
              }).map((Char ,index)=>{
                return(
                  <div key ={index} className="ERCharView" onClick={()=>window.location.href=`/Character/${Char.EngName}`}>
                      <div 
                      className="ERCharViewHover">
                      <img className="ERCharThumb"
                      src={`/image/Character_Img/${Char.EngName}/Thumbnail/Default/Half.png`}
                      ></img>
                      <div className="ERCharThumbName">
                        <p>{Char.KorName}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
       
          </div>
      </div>
        
 
    );
  }

export default Character_Chose;
