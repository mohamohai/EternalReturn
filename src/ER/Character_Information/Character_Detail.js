import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import CharacterSkin from "./CharacterSkin.json";
import "./Character_Detail.css"


function Character_Detail() {
    const { CharName } = useParams();
    const [SkinData, setSkin] = useState("Default");
    console.log({CharName})
    const CharArr = []
  return (
    
    <div>
     {console.log(CharacterSkin[3])}
      {CharacterSkin.map((ss,dd)=>{
         console.log(ss.Skin)
      
    })}
        <img
     
                      src={`/image/Character_Img/${CharName}/Thumbnail/Default/Half.png`}
         />
         <img/>
    </div>
  );

  }
export default Character_Detail;