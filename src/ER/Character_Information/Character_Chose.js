import React, { Component, useState } from "react";
import axios from "axios";
import "./Character_Chose.css";
import CharacterAll from "./CharacterAll.json";
import CharAll from "../JsonFile/Char.json"

  function Character_Chose() {

    const [ViewMode, setSearchName] = useState(0);
    let KorName = CharAll;
    const reverse = [...CharAll].reverse();//최신순
    
    console.log(KorName)

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
          <div className="Character_Contanier">
            <div>
              {reverse.map((Char ,index)=>{
                return(
                  <div key ={index} className="ERCharView">
                    <img className="ERCharThumb"
                    src={`/image/Character_Img/${Char.EngName}/Thumbnail/Default/Half.png`}
                    ></img>
                    <div className="ERCharThumbName">
                      <p>{Char.KorName}</p>
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
