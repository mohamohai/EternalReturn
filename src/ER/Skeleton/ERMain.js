import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./css/ERMain.css";
import "./css/GNB.css";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";
import ERGNB from "../ERGNB";
function ERMain(){
  const [GoUrl,setGoUrl]=useState("한동그라미"); 

  const [UpdateCheck,setUpdateCheck]=useState(false); 
  let today = new Date();
  let day = today.getDay();  // 요일   
  let hours = today.getHours(); // 시
  let Minutes = today.getMinutes();
  const ERPreView = document.getElementsByClassName("ViewERPage");





  const [PreViewImg, setPreViewImg]= useState("ERSearch");
  const ERPreViewImg = document.getElementsByClassName("ERPreViewImg");


  const ERUpdateCheck = () => {
    console.log(day+"  "+ hours + " "+Minutes)
    if(day==4 && hours>=11 && hours<=15 && Minutes<=1){
      setUpdateCheck(true)
      
    }
  }
  useEffect(()=>{
    ERUpdateCheck()
  },[])

  const ERPreViewClick = (inNum) => {
     ERPreView[inNum].classList.toggle("ViewErPageClick");
  }

  const ERPreViewImgClick = (inString) => {
    inString ? setPreViewImg(inString) : setPreViewImg(PreViewImg);
    ERPreViewImg[0].classList.toggle("ERPreViewImgClick");
 }


  return(
    <div className="ERMain" style={{background: `linear-gradient( to bottom,        rgba(255, 255, 255, 0) 10%,        rgba(255, 255, 255, 0.25) 25%,        rgba(255, 255, 255, 0.5) 50%,        rgba(255, 255, 255, 0.75) 75%,        rgba(255, 255, 255, 1) 100%        ), url(/image/Main/Season3.png)   `,}}>
      <ERGNB></ERGNB>
      <div className="NickSearchBox">
      

          {!UpdateCheck ? 
          <form action={`/Eternal/${GoUrl}`}>
            <input type="text" placeholder="닉네임을 입력해주세요 / 닉네임이 없으시다면 좌측 상단의 전적검색을 눌러주세요"
              onChange={(e)=>setGoUrl(e.target.value)}
              onClick={()=>console.log(GoUrl)}
            />
          </form>:
          // <div className="ERThursday">
          //   <div className="ViewERPage" onClick={()=> ERPreViewClick(0)}>
          //     <img src="/image/item/ERSearch.png"></img>
          //   </div>
          //   <div className="ViewERPage" onClick={()=> ERPreViewClick(1)}>
          //     <img src="/image/item/ERSearchDetail.png"></img>
          //   </div>
          // </div>
          <div className="ERThursday">
            <div className="ERThursdayGuidanceX">X</div>
            <div className="ERThursdayGuidance">
              게임사의 정기 업데이트 시간임으로 이용할 수 없습니다.<br></br>
              아래의 사진으로 대체하겠습니다. <br></br>
              <span>이 화면은 게임사의 업데이트가 끝날 시 정상적으로 변경됩니다. </span>
             </div>
            <div className="ViewERPageBtn">
              <div className="ViewERPage" onClick={()=> ERPreViewImgClick("ERSearch")}>
                기본화면
              </div>
              <div className="ViewERPage" onClick={()=> ERPreViewImgClick("ERSearchDetail")}>
                게임별 자세히 보기
              </div>
            </div>
            <img onClick={()=> ERPreViewImgClick()} className="ERPreViewImg" src={`/image/Item/${PreViewImg}.png`}></img>
          </div>
          
          }
          
      </div>
    </div>
  )
}export default ERMain
