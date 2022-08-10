import React, { Component, useState } from "react";
import axios from "axios";
import "./Character_Infomation.css";
import CharacterAll from "./CharacterAll.json";


  function Character_Infomation() {
    const goDetail= (CharName) =>{
        window.location.href = `/Character_Infomation/Character_Detail/${CharName}`;
    }
    const [SearchName, setSearchName] = useState('');
    const CharacterArr = [];
   
    let KorName = CharacterAll.sort(function(a,b){
      let x = a.KorName.toLowerCase();
      let y = b.KorName.toLowerCase();
      if (x < y){
        return -1
      }
      if(x > y){
        return 1;
      }
      return 0;
    })

 
    
   
    return (
      <div id="Character_Infomation">
        
          <div id="Character_SelectBoard">
          <div><ul>
          <li>실험체 정보</li>
          <li></li>
          </ul></div>
            <div className="CharSearch">
            <input className="CharSearchText" type="text" placeholder="Search..." onChange={(e) => {setSearchName(e.target.value)}}></input>
            <ul className="CharSearchConsonant">
              <li className="Consonant"onClick={()=>setSearchName("ㄱ")}>ㄱ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㄴ")}>ㄴ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㄷ")}>ㄷ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㄹ")}>ㄹ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅁ")}>ㅁ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅂ")}>ㅂ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅅ")}>ㅅ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅇ")}>ㅇ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅈ")}>ㅈ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅊ")}>ㅊ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅋ")}>ㅋ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅌ")}>ㅌ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅍ")}>ㅍ</li>
              <li className="Consonant"onClick={()=>setSearchName("ㅎ")}>ㅎ</li>
              <li className="Consonant"onClick={()=>setSearchName("")}>" "</li>
            </ul>
            </div>

            <br></br>
            {CharacterAll.filter((val)=>{
              if(SearchName==""){
                return val
              }else if(val.KorName.includes(SearchName)||val.Consonant.includes(SearchName))
                return val
            }).map((CharacterAllJson,key)=>{
              return(
                <div className="CharacterHalf" key={key}>
                  <div
                    onClick={()=>goDetail(CharacterAllJson.EngName)}
                    id={CharacterAllJson.EngName}
                    className="HalfDiv"
                  >
                    <img
                      className="ThunbnailIcon"
                      src={`/image/Character_Img/${CharacterAllJson.EngName}/Thumbnail/Default/Mini.png`}
                    />
                    <p>{CharacterAllJson.KorName}</p>
                  </div>
                  <div></div>
                </div>
              )
            })}
            </div>
            </div>
        
 
    );
  }

export default Character_Infomation;
